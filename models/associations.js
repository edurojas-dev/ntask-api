module.export = (app) => {
  const Users = app.models.usuarios;
  const Tasks = app.models.tasks;

  Users.hasMany(Tasks);
  Tasks.belongsTo(Users, {
    foreignKey: "userId",
  });
};
