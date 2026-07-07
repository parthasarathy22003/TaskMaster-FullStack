import React, { useState } from 'react';
import { validateTodo } from '../utils/validation';

const TodoItem = ({ todo, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    setIsLoading(true);
    await onToggle(todo.id, !todo.completed);
    setIsLoading(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditTitle(todo.title);
    setError('');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
    setError('');
  };

  const handleSaveEdit = async () => {
    const validation = validateTodo(editTitle);
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    setIsLoading(true);
    const success = await onUpdate(todo.id, editTitle.trim());
    setIsLoading(false);
    
    if (success) {
      setIsEditing(false);
      setError('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <div className={`flex items-center gap-3 p-3 bg-white rounded-lg border ${todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'} hover:shadow-md transition-all duration-200`}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={isLoading}
          className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer disabled:opacity-50"
        />
        
        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
                if (error) setError('');
              }}
              onKeyDown={handleKeyPress}
              className="flex-1 px-3 py-1 border border-primary-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
              autoFocus
              disabled={isLoading}
            />
            {error && (
              <span className="text-red-500 text-sm">{error}</span>
            )}
          </div>
        ) : (
          <span className={`flex-1 text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              disabled={isLoading}
              className="text-green-600 hover:text-green-800 font-medium px-3 py-1 rounded hover:bg-green-50 transition-colors duration-200 disabled:opacity-50"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              disabled={isLoading}
              className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              disabled={isLoading}
              className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              disabled={isLoading}
              className="text-red-600 hover:text-red-800 px-3 py-1 rounded hover:bg-red-50 transition-colors duration-200 disabled:opacity-50"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;