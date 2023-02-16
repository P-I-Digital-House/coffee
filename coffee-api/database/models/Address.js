module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    aname: {
      type: DataTypes.STRING
    },
    cep: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    anumber: {
      type: DataTypes.STRING
    },
    complement: {
      type: DataTypes.STRING
    },
    district: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    users_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "address",
    timestamps: false
  }
  );

  Address.associate = function(models) {
    Address.belongsTo(models.User, {
      as: "users",
      foreignKey: "users_id"
    });
  };

  Address.associate = function(models) {
    Address.hasMany(models.Order, {
      as: "orders",
      foreignKey: "address_id"
    });
  };
  
  return Address;
}