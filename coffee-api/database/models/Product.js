module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pname: {
      type: DataTypes.STRING
    },
    pdescription: {
      type: DataTypes.STRING
    },
    picture: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.FLOAT
    },
    pquantity: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "product",
    timestamps: false
  }
  );

  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      as: "Product_orders",
      through: "product_orders",
      foreignKey: "product_id",
      otherKey: "orders_id"
    });
  };
  
  return Product;
}