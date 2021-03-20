module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define("Events", {
    event: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: "2021-1-1"
      }
    }
  });
  return Events;
};
