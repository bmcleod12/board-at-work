module.exports = (sequelize, DataTypes) => {
  const ToDos = sequelize.define("ToDos", {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  return ToDos;
};
