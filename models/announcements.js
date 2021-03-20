module.exports = (sequelize, DataTypes) => {
  const Announcements = sequelize.define("Announcements", {
    announcement: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Announcements;
};
