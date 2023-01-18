module.exports = (app) => {
  async function start(port) {
    try {
      await app.db.authenticate();
      await app.db.sync();
      app.listen(port, () => {
        console.log(`Ntask API running - link: http://localhost:${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
  start(app.get("port"));
};
