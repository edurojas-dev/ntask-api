module.exports = {
  db: {
    database: "ntask",
    username: "",
    password: "",
    params: {
      dialect: "sqlite",
      storage: "ntaks.sqilte",
      define: {
        underscored: true,
      },
    },
  },

  jwt: {
    secret: 'Nta$K-AP1',
    options: { session: false }
  }
};
