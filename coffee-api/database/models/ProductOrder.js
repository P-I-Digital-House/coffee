module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define("ProductOrder", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    price: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.FLOAT
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