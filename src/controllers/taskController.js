const taskService = require("../services/taskService");


const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await taskService.updateTask(
      id,
      req.body
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const toggleTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await taskService.toggleTaskStatus(id);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await taskService.deleteTask(id);

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getTasksByStatus = async (req, res) => {
  try {
    const { status } = req.query;

    const tasks =
      await taskService.getTasksByStatus(status);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getTaskStats = async (req, res) => {
  try {
    const stats =
      await taskService.getTaskStats();

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  toggleTaskStatus,
  deleteTask,
  getTasksByStatus,
  getTaskStats,
};