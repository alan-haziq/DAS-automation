

module.exports = function(sequelize, DataTypes) {

	var UserProject = sequelize.define('UserProject', {
			id: {
		      type: DataTypes.INTEGER,
		      primaryKey: true,
		      autoIncrement: true
		    },
			role: DataTypes.ENUM('Leasing Agent', 'Account Manager', 'TAM', 'RF Engineer', 'VGM', 'PM')
		}
	);

	return UserProject;
};
