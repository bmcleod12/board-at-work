module.exports = (sequelize, DataTypes) => {
  const Quotes = sequelize.define("Quotes", {
    quote: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Quotes;
};
