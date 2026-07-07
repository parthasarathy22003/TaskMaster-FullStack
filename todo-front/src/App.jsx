import './App.css'

import React, { useState, useEffect } from 'react';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  toggleComplete,
  deleteTodo,
} from './api/todoApi';
import AddTodo from '../src/comp/AddTodo';
import TodoList from '../src/comp/TodoList';
import Toast from '../src/comp/Toast';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await getAllTodos();
      setTodos(response.data.data || []);
    } catch (error) {
      showToast('Error fetching todos: ' + (error.response?.data?.message || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleAddTodo = async (title) => {
    try {
      const response = await createTodo({ title });
      if (response.data.success) {
        showToast('Todo added successfully! 🎉');
        await fetchTodos();
        return true;
      }
    } catch (error) {
      showToast('Error adding todo: ' + (error.response?.data?.message || error.message), 'error');
      return false;
    }
  };

  const handleToggleTodo = async (id, completed) => {
    try {
      const response = await toggleComplete(id, { completed });
      if (response.data.success) {
        showToast(`Todo ${completed ? 'completed' : 'uncompleted'}! ${completed ? '🎯' : '🔄'}`);
        await fetchTodos();
        return true;
      }
    } catch (error) {
      showToast('Error updating todo status: ' + (error.response?.data?.message || error.message), 'error');
      return false;
    }
  };

  const handleUpdateTodo = async (id, title) => {
    try {
      const response = await updateTodo(id, { title });
      if (response.data.success) {
        showToast('Todo updated successfully! 📝');
        await fetchTodos();
        return true;
      }
    } catch (error) {
      showToast('Error updating todo: ' + (error.response?.data?.message || error.message), 'error');
      return false;
    }
  };

  const handleDeleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo? This action cannot be undone.')) {
      try {
        const response = await deleteTodo(id);
        if (response.data.success) {
          showToast('Todo deleted successfully! 🗑️');
          await fetchTodos();
          return true;
        }
      } catch (error) {
        showToast('Error deleting todo: ' + (error.response?.data?.message || error.message), 'error');
        return false;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              📋 Task Manager
            </h1>
            <p className="text-gray-600">
              Organize your tasks efficiently
            </p>
          </div>

          <div className="mb-8">
            <AddTodo onAdd={handleAddTodo} />
          </div>

          <div>
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
              </div>
            ) : (
              <TodoList
                todos={todos}
                onToggle={handleToggleTodo}
                onUpdate={handleUpdateTodo}
                onDelete={handleDeleteTodo}
              />
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>💡 Tip: Click the checkbox to mark a task as complete</p>
          <p>✏️ Click Edit to modify a task, Delete to remove it</p>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;