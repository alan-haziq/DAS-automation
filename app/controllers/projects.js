/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var allowedFields = ["title", "description", "submittedDate", "contractedStartDate", "projectType", "oracleProjectId", "projectStatus", "opportunityId", "opportunityType"];

/**
 * Find project by id
 * Note: This is called every time that the parameter :projectId is used in a URL. 
 * Its purpose is to preload the project on the req object then call the next function. 
 */
exports.project = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Project.find({ 
        where: {id: id}, 
        include: [
            db.Milestone, 
            {
                model: db.FinanceModel, 
                include: [ {
                    model: db.FinanceModelItem,
                    include: [ db.FinanceModelItemLine]
                }]
            },
            {
                model: db.CostPackage, 
                include: [ db.CostPackageLine ] 
            }
        ] 
    }).success(function(project){
        if(!project) {
            return next(new Error('Failed to load project ' + id));
        } else {
            req.project = project;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a project
 */
exports.create = function(req, res) {
    // augment the project by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of project on the res object. 
    db.Project.create(
        _.pick ( req.body, allowedFields )
    ).success(function(project){
        if(!project){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(project);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a project
 */
exports.update = function(req, res) {

    // create a new variable to hold the project that was placed on the req object.
    var project = req.project;
    
    project.updateAttributes(
        _.pick ( req.body, allowedFields )
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
 * Delete an project
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the project that was placed on the req object.
    var project = req.project;

    project.destroy().success(function(){
        return res.jsonp(project);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an project
 */
exports.show = function(req, res) {
    // Sending down the project that was just preloaded by the projects.project function
    // and saves project on the req object.
    return res.jsonp(req.project);
};

/**
 * List of projects
 */
exports.all = function(req, res) {
    db.Project.findAll({include: [db.Milestone, db.FinanceModel, db.CostPackage]}).success(function(projects){
        return res.jsonp(projects);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

exports.addUser = function(req, res) {

    var userId = req.body.userId;

    db.User.find({ where: {id: userId} }).success(function(user){
        if(!user) {
            return next(new Error('Failed to find user ' + id));
        } else {
            req.project.addUser(user, function(err) {
                return next();
            });
        }
    }).error(function(err){
        return next(err);
    });
};
exports.removeUser = function(req, res) {

    var userId = req.body.userId;

    db.User.find({ where: {id: userId} }).success(function(user){
        if(!user) {
            return next(new Error('Failed to find user ' + id));
        } else {
            req.project.removeUser(user, function(err) {
                return next();
            });
        }
    }).error(function(err){
        return next(err);
    });
};