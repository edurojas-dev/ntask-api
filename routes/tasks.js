module.exports = (app) => {
  const Tasks = app.models.tasks;
  app.route('/tasks')
    .get(async (req, res) => {
      try {
        const result = await Tasks.findAll();
        res.json({ result });
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })
    .post(async (req, res) => {
      try {
        const result = await Tasks.create(req.body);
        res.json(result);
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })
  
  app.route('/tasks/:id')
    .get(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        const result = await Tasks.findOne({ where });
        result ? res.json(result) : res.sendStatus(404)
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })
    .put(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        await Tasks.update(req.body, { where });
        res.json({msg: "tarefa atualiza!"})
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })
    .delete(async (req, res) => {
      try {
        const { id } = req.params
        const where = { id }
        await Tasks.destroy({ where });
        res.sendStatus(204)
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })
    
};
