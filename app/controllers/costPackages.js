/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var costPackageAllowedFields = ["submittedDate", "packageType", "packageStatus", "packageConfidence", "ProjectId"];

/**
 * Find costPackage by id
 * Note: This is called every time that the parameter :costPackageId is used in a URL. 
 * Its purpose is to preload the costPackage on the req object then call the next function. 
 */
exports.costPackage = function(req, res, next, id) {
    console.log('id => ' + id);
    db.CostPackage.find({ where: {id: id}, include: [db.CostPackageLines] }).success(function(costPackage){
        if(!costPackage) {
            return next(new Error('Failed to load costPackage ' + id));
        } else {
            req.costPackage = costPackage;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a costPackage
 */
exports.create = function(req, res) {
    // augment the costPackage by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of costPackage on the res object. 
    db.CostPackage.create(
        _.pick ( req.body, costPackageAllowedFields )
    ).success(function(costPackage){
        if(!costPackage){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(costPackage);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a costPackage
 */
exports.update = function(req, res) {

    // create a new variable to hold the costPackage that was placed on the req object.
    var costPackage = req.costPackage;

    costPackage.updateAttributes(
        _.pick ( req.body, costPackageAllowedFields )
    ).success(function(a){
        return res.jsonp(a);
    }).error(function(err){
        return res.render('error', {
            error: err, 
            status: 500
        });
    });
};

/**
 * Delete an costPackage
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the costPackage that was placed on the req object.
    var costPackage = req.costPackage;

    costPackage.destroy().success(function(){
        return res.jsonp(costPackage);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an costPackage
 */
exports.show = function(req, res) {
    // Sending down the costPackage that was just preloaded by the costPackages.costPackage function
    // and saves costPackage on the req object.
    return res.jsonp(req.costPackage);
};

/**
 * List of costPackages
 */
exports.all = function(req, res) {
    var projectId = req.query.projectId;

    db.CostPackage.findAll({where: {ProjectId: projectId}, include: [db.CostPackageLines]}).success(function(costPackages){
        return res.jsonp(costPackages);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
