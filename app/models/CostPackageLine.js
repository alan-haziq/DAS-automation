

module.exports = function(sequelize, DataTypes) {

	var CostPackageLine = sequelize.define('CostPackageLine', {
			accountingType: DataTypes.STRING,
			rateName: DataTypes.ENUM('UP-FRONT', 'MONTHLY'),
			financialType: DataTypes.ENUM('COST', 'REVENUE'),
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
