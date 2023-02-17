module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define("ProductOrder", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    totalPrice: {
      type: DataTypes.FLOAT
    },
    unitPrice: {
      type: DataTypes.FLOAT
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    orders_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "product_orders",
    timestamps: false
  }
  );

  return ProductOrder;
}