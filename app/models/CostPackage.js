

module.exports = function(sequelize, DataTypes) {

	var CostPackage = sequelize.define('CostPackage', {
			submittedDate: DataTypes.DATE,
			packageType: DataTypes.ENUM('ROM', 'PRELIM', 'FINAL'),
			packageStatus: DataTypes.ENUM('PENDING', 'ACTIVE', 'CLOSED'),
			packageConfidence: DataTypes.INTEGER
		},
		{
			associate: function(models){
				CostPackage.belongsTo(models.Project);
				CostPackage.hasMany(models.CostPackageLine);
			}
		}
	);

	return CostPackage;
};
