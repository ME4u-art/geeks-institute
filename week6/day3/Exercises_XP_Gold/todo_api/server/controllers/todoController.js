import * as Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title)
      return res.status(400).json({ message: "Title is required" });

    const newTodo = await Todo.createTodo(title);
    res.status(201).json(newTodo);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.updateTodo(req.params.id, title, completed);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteTodo(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
