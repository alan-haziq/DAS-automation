

module.exports = function(sequelize, DataTypes) {

	var MileStone = sequelize.define('MileStone', {
			forcastDate: DataTypes.DATE,
			actualDate: DataTypes.DATE,
			status: DataTypes.INTEGER,
			percentComplete: DataTypes.FLOAT,
			packageConfidence: DataTypes.INTEGER
		},
		{
			associate: function(models){
				MileStone.belongsTo(models.Project);
			}
		}
	);

	return MileStone;
};
