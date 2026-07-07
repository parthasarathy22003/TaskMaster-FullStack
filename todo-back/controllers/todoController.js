const { Todo } = require('../models');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      order: [['created_at', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      data: todos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching todos',
      error: error.message
    });
  }
};

// Get single todo
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching todo',
      error: error.message
    });
  }
};

// Create todo
exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }
    
    const todo = await Todo.create({ 
      title: title.trim(),
      completed: false 
    });
    
    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating todo',
      error: error.message
    });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    
    if (!title || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }
    
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await todo.update({ title: title.trim() });
    
    res.status(200).json({
      success: true,
      message: 'Todo updated successfully',
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating todo',
      error: error.message
    });
  }
};

// Toggle complete status
exports.toggleComplete = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    
    if (typeof completed !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'Completed must be a boolean value'
      });
    }
    
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await todo.update({ completed });
    
    res.status(200).json({
      success: true,
      message: `Todo ${completed ? 'completed' : 'uncompleted'} successfully`,
      data: todo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating todo status',
      error: error.message
    });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }
    
    await todo.destroy();
    
    res.status(200).json({
      success: true,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting todo',
      error: error.message
    });
  }
};