import pool from "../config/db.js";

export const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
  return result.rows;
};

export const getTodoById = async (id) => {
  const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return result.rows[0];
};

export const createTodo = async (title) => {
  const result = await pool.query(
    "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
    [title]
  );
  return result.rows[0];
};

export const updateTodo = async (id, title, completed) => {
  const result = await pool.query(
    "UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
    [title, completed, id]
  );
  return result.rows[0];
};

export const deleteTodo = async (id) => {
  await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};
