import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';

export const getAllTodos = () => axios.get(`${API_URL}/todos`);
export const getTodo = (id) => axios.get(`${API_URL}/todos/${id}`);
export const createTodo = (data) => axios.post(`${API_URL}/todos`, data);
export const updateTodo = (id, data) => axios.put(`${API_URL}/todos/${id}`, data);
export const toggleComplete = (id, data) => axios.patch(`${API_URL}/todos/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`);