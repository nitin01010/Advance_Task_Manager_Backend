const Task = require("../Modules/taskModule");

async function handleGETAllTask(req, res) {
  try {
    const tasks = await Task.find();
    res.status(200).json({ message: "All tasks fetched successfully", data: tasks });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks", error: error.message });
  }
}

async function handleCreateTask(req, res) {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const newTask = await Task.create({ title });
    res.status(201).json({ message: "Task created successfully", data: newTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to create task", error: error.message });
  }
}

async function handleUpdateTask(req, res) {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );

    if (!updatedTask) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task updated successfully", data: updatedTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to update task", error: error.message });
  }
}

async function handleDeleteTask(req, res) {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) return res.status(404).json({ message: "Task not found" });

    res.status(200).json({ message: "Task deleted successfully", data: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task", error: error.message });
  }
}

async function handleToggleTaskStatus(req, res) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    task.completed = !task.completed;
    await task.save();

    res.status(200).json({ message: "Task status updated successfully", data: task });
  } catch (error) {
    res.status(500).json({ message: "Failed to update task status", error: error.message });
  }
}

module.exports = {
  handleGETAllTask,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
  handleToggleTaskStatus,
};
