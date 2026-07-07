export const validateTodo = (title) => {
  if (!title || title.trim().length === 0) {
    return {
      isValid: false,
      message: 'Todo title is required'
    };
  }
  
  if (title.trim().length > 255) {
    return {
      isValid: false,
      message: 'Todo title must be less than 255 characters'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
};