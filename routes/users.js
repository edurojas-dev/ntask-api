module.exports = (app) => {
  const Users = app.models.usuarios;
  app.route('/users/:id')
    .get(async (req, res) => {
      try {
        const { id } = req.params
        const attributes = ['id', 'name', 'email']
        const options = { attributes }
        const result = await Users.findByPk(id, options);
        result ? res.json(result) : res.sendStatus(404)
      } catch (error) {
        res.status(412).json({erro: error.message});
      }
    })

  app.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params
      const where = { id }
      await Users.destroy({ where });
      res.sendStatus(204)
    } catch (error) {
      res.status(412).json({erro: error.message});
    }
  }) 
  app.post('/users', async (req, res) => {
    try {
      const result = await Users.create(req.body);
      res.json(result);
    } catch (error) {
      res.status(412).json({erro: error.message});
    }
  })    
};
