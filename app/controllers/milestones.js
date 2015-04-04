/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var allowedFields = ["title", "forcastDate", "actualDate", "status", "percentComplete", "packageConfidence", "ProjectId"];

/**
 * Find milestone by id
 * Note: This is called every time that the parameter :milestoneId is used in a URL. 
 * Its purpose is to preload the milestone on the req object then call the next function. 
 */
exports.milestone = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Milestone.find({ where: {id: id}, include: [db.Project] }).success(function(milestone){
        if(!milestone) {
            return next(new Error('Failed to load milestone ' + id));
        } else {
            req.milestone = milestone;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a milestone
 */
exports.create = function(req, res) {
    // augment the milestone by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of milestone on the res object. 
    db.Milestone.create(
        _.pick ( req.body, allowedFields )
    ).success(function(milestone){
        if(!milestone){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(milestone);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a milestone
 */
exports.update = function(req, res) {

    // create a new variable to hold the milestone that was placed on the req object.
    var milestone = req.milestone;

    milestone.updateAttributes(
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
 * Delete an milestone
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the milestone that was placed on the req object.
    var milestone = req.milestone;

    milestone.destroy().success(function(){
        return res.jsonp(milestone);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an milestone
 */
exports.show = function(req, res) {
    // Sending down the milestone that was just preloaded by the milestones.milestone function
    // and saves milestone on the req object.
    return res.jsonp(req.milestone);
};

/**
 * List of milestones
 */
exports.all = function(req, res) {
    var projectId = req.query.projectId;

    db.Milestone.findAll({where: {ProjectId: projectId}, include: [db.Project]}).success(function(milestones){
        return res.jsonp(milestones);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
