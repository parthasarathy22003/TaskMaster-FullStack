require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('../todo-back/config/db');
const todoRoutes = require('../todo-back/routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Todo Application API',
    endpoints: {
      getAll: 'GET /todos',
      getOne: 'GET /todos/:id',
      create: 'POST /todos',
      update: 'PUT /todos/:id',
      toggleComplete: 'PATCH /todos/:id',
      delete: 'DELETE /todos/:id'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Database connection and sync
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
    
    await sequelize.sync({ alter: true });
    console.log('✅ Database synchronized');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📍 http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to start server:', error);
    process.exit(1);
  }
};

startServer();