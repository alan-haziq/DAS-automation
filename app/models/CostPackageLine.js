

module.exports = function(sequelize, DataTypes) {

	var CostPackageLine = sequelize.define('CostPackageLine', {
			accountingType: DataTypes.STRING,
			rateName: DataTypes.STRING,
			financialType: DataTypes.STRING,
			flatAmount: DataTypes.FLOAT,
			scaleAmount: DataTypes.FLOAT,
			percentage: DataTypes.FLOAT
		},
		{
			associate: function(models){
				CostPackageLine.belongsTo(models.CostPackage);
			}
		}
	);

	return CostPackageLine;
};
