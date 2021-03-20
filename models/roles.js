module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define("Roles", {
    roles: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  return Roles;
};
