

module.exports = function(sequelize, DataTypes) {

	var Project = sequelize.define('Project', {
			submittedDate: DataTypes.DATE,
			contractedStartDate: DataTypes.DATE,
			projectType: DataTypes.ENUM('DAS', 'WLAN', 'SMALL_CELL'),
			oracleProjectId: DataTypes.STRING,
			projectStatus: DataTypes.ENUM('EVALUATION', 'PLANNING', 'BUILDING', 'COMPLETED'),
			opportunityId: DataTypes.STRING,
			opportunityType: DataTypes.ENUM('DAS', 'WLAN', 'SMALL_CELL', 'COMBINED')
		},
		{
    		classMethods: {
				associate: function(models){
					Project.hasMany(models.Milestone);
					Project.hasMany(models.CostPackage);
					Project.hasMany(models.FinanceModel);
					Project.belongsToMany(models.User, { through: models.UserProject });
				}
			}
		}
	);

	return Project;
};
