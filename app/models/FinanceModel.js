

module.exports = function(sequelize, DataTypes) {

	var FinanceModel = sequelize.define('FinanceModel', {
			submittedDate: DataTypes.DATE,
			opportunityId: DataTypes.STRING,
			modelName: DataTypes.STRING,
			modelStatus: DataTypes.ENUM('PENDING', 'ACTIVE', 'CLOSED'),
			statusDate: DataTypes.DATE,
			owner: DataTypes.STRING,
			modelComponents: DataTypes.STRING,
			costBufferAmount: DataTypes.FLOAT,
			costBufferPercent: DataTypes.FLOAT,
			costOverRide: DataTypes.FLOAT,
			costOverRideReason: DataTypes.TEXT
		},
		{
			associate: function(models){
				FinanceModel.belongsTo(models.Project);
				FinanceModel.belongsTo(models.CostPackage);
				FinanceModel.hasMany(models.FinanceModelItem);
			}
		}
	);

	return FinanceModel;
};
