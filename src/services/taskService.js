const prisma = require("../db/prisma");

const createTask = async (taskData) => {
  return await prisma.task.create({
    data: taskData,
  });
};

const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getTaskById = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

const updateTask = async (id, updatedData) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data: updatedData,
  });
};

const toggleTaskStatus = async (id) => {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: !task.completed,
    },
  });
};

const deleteTask = async (id) => {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
};

const getTaskStats = async () => {
  const active = await prisma.task.count({
    where: {
      completed: false,
    },
  });

  const completed = await prisma.task.count({
    where: {
      completed: true,
    },
  });

  return {
    active,
    completed,
  };
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  toggleTaskStatus,
  deleteTask,
  getTaskStats
};