const express = require("express");
const router = express.Router();

const {
  handleGETAllTask,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
  handleToggleTaskStatus
} = require("../controllers/taskControllers");

router.get("/", handleGETAllTask);
router.post("/", handleCreateTask);
router.put("/:id", handleUpdateTask);
router.delete("/:id", handleDeleteTask);
router.patch("/:id/toggle", handleToggleTaskStatus);

module.exports = router;
