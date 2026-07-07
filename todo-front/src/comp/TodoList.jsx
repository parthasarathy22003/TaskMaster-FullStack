import React from 'react';
import TodoItem from '../comp/TodoItem';

const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  if (!todos || todos.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-gray-500 text-lg">No todos yet! Add your first task above.</p>
        <p className="text-gray-400 text-sm mt-2">Click the input field and press "Add Todo"</p>
      </div>
    );
  }

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <span className="text-sm text-gray-600">
            Total: <span className="font-semibold">{todos.length}</span>
          </span>
          <span className="text-sm text-green-600">
            Completed: <span className="font-semibold">{completedCount}</span>
          </span>
          <span className="text-sm text-yellow-600">
            Pending: <span className="font-semibold">{pendingCount}</span>
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;