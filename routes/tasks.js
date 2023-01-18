module.exports = (app) => {
  const Tasks = app.models.tasks;
  app.get("/tasks", async (req, res) => {
    try {
      const tasks = await Tasks.findAll();
      res.json({ tasks });
    } catch (error) {
      res.status(500).json(error);
    }
  });
};
