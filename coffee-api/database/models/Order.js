module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    odescription: {
      type: DataTypes.STRING
    },
    totalPrice: {
      type: DataTypes.FLOAT
    },
    dt_create: {
      type: DataTypes.DATE
    },
    delivery_date: {
      type: DataTypes.DATE
    },
    users_id: {
      type: DataTypes.INTEGER
    },
    address_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "orders",
    timestamps: false
  }
  );

  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      as: "users",
      foreignKey: "users_id"
    });
  };

  Order.associate = function(models) {
    Order.belongsTo(models.Address, {
      as: "address",
      foreignKey: "address_id"
    });
  };

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      as: "product_Orders",
      through: "product_orders",
      foreignKey: "orders_id",
      otherKey: "product_id"
    });
  };
  
  return Order;
}