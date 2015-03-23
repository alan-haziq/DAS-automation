

module.exports = function(sequelize, DataTypes) {

	var FinanceModelItem = sequelize.define('FinanceModelItem', {
			PartyId: DataTypes.BIGINT,
			partyName: DataTypes.STRING,  
			itemName: DataTypes.STRING,
			agreementId: DataTypes.STRING,
			agreementStatus: DataTypes.INTEGER,
			actualDate: DataTypes.DATE,
			agreementType: DataTypes.INTEGER
		},
		{
			associate: function(models){
				FinanceModelItem.belongsTo(models.FinanceModel);
				FinanceModelItem.hasMany(models.FinanceModelItemLine);
			}
		}
	);

	return FinanceModelItem;
};
