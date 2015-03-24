

module.exports = function(sequelize, DataTypes) {

	var Milestone = sequelize.define('Milestone', {
			forcastDate: DataTypes.DATE,
			actualDate: DataTypes.DATE,
			status: DataTypes.ENUM('PENDING', 'IN PROGRESS', 'COMPLETED', 'BLOCKED', 'RETURNED'),
			percentComplete: DataTypes.FLOAT,
			packageConfidence: DataTypes.INTEGER
		},
		{
			associate: function(models){
				Milestone.belongsTo(models.Project);
			}
		}
	);

	return Milestone;
};
