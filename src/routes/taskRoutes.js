const express = require("express");

const router = express.Router();

const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  toggleTaskStatus,
  deleteTask,
  getTasksByStatus,
  getTaskStats,
} = require("../controllers/taskController");

router.post("/", createTask);

router.get("/stats", getTaskStats);

router.get("/", (req, res, next) => {
  if (req.query.status) {
    return getTasksByStatus(req, res, next);
  }

  return getAllTasks(req, res, next);
});

router.get("/:id", getTaskById);

router.patch("/:id", updateTask);

router.patch("/:id/toggle", toggleTaskStatus);

router.delete("/:id", deleteTask);

module.exports = router;