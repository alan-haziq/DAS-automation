

module.exports = function(sequelize, DataTypes) {

	var FinanceModelItemLine = sequelize.define('FinanceModelItemLine', {
			accountingType: DataTypes.STRING,
			rateName: DataTypes.STRING,
			financialType: DataTypes.INTEGER,
			flatAmount: DataTypes.FLOAT,
			scaleAmount: DataTypes.FLOAT,
			percentage: DataTypes.FLOAT
		},
		{
			associate: function(models){
				FinanceModelItemLine.belongsTo(models.FinanceModelItem);
			}
		}
	);

	return FinanceModelItemLine;
};
