module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    cardNumber: {
      type: DataTypes.STRING
    },
    cardName: {
      type: DataTypes.STRING
    },
    securityCode: {
      type: DataTypes.STRING
    },
    validity: {
      type: DataTypes.STRING
    },
    users_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "payment",
    timestamps: false
  }
  );

  Payment.associate = function(models) {
    Payment.belongsTo(models.User, {
      as: "users",
      foreignKey: "users_id"
    });
  };
  
  return Payment;
}