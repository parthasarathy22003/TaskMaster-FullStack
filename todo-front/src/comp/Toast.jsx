import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  return (
    <div className={`fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in max-w-md`}>
      <div className="flex items-center">
        <span className="mr-3 text-xl">{icons[type]}</span>
        <span className="flex-1">{message}</span>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-200 transition-colors">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;