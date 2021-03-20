module.exports = (sequelize, DataTypes) => {
  const Reminders = sequelize.define("Reminders", {
    reminder: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Reminders;
};
