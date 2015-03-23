

module.exports = function(sequelize, DataTypes) {

	var FinanceModelItem = sequelize.define('FinanceModelItem', {
			partyId: DataTypes.BIGINT,
			partyName: DataTypes.STRING,  
			itemName: DataTypes.STRING,
			agreementId: DataTypes.STRING,
			agreementStatus: DataTypes.INTEGER,
			actualDate: DataTypes.DATE,
			agreementType: DataTypes.INTEGER
		},
		{
    		classMethods: {
				associate: function(models){
					FinanceModelItem.belongsTo(models.FinanceModel);
					FinanceModelItem.hasMany(models.FinanceModelItemLine);
				}
			}
		}
	);

	return FinanceModelItem;
};
