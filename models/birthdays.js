module.exports = (sequelize, DataTypes) => {
  const Birthdays = sequelize.define("Birthdays", {
    birthdayMonth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    employee: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });
  return Birthdays;
};
