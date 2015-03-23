

module.exports = function(sequelize, DataTypes) {

	var Project = sequelize.define('Project', {
			submittedDate: DataTypes.DATE,
			contractedStartDate: DataTypes.DATE,
			projectType: DataTypes.INTEGER,
			oracleProjectId: DataTypes.STRING,
			projectStatus: DataTypes.INTEGER,
			opportunityId: DataTypes.STRING,
			opportunityType: DataTypes.STRING
		},
		{
			associate: function(models){
				Project.hasMany(models.MileStone);
				Project.hasMany(models.CostPackage);
				Project.hasMany(models.FinanceModel);
			}
		}
	);

	return Project;
};
