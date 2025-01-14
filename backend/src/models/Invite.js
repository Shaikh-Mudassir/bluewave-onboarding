const settings = require("../../config/settings");

module.exports = (sequelize, DataTypes) => {
    const Invite = sequelize.define(
      "Invite",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        invitedBy: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        invitedEmail: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM(settings.user.roleEnum),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: "invites",
        timestamps: false,
      },
    );
  
    return Invite;
  };
  