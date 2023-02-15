module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uname: {
      type: DataTypes.STRING
    },
    document: {
      type: DataTypes.STRING
    },
    birthdate: {
      type: DataTypes.DATE
    },
    phone: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    upassword: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "users",
    timestamps: false
  }
  );

  User.associate = function(models) {
    User.hasMany(models.Address, {
      as: "address",
      foreignKey: "users_id"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.Order, {
      as: "orders",
      foreignKey: "users_id"
    });
  };

  return User;
}