/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var financeModelAllowedFields = ["submittedDate", "opportunityId", "modelName", "modelStatus", "statusDate", "owner", "modelComponents", "costBufferAmount", "costBufferPercent", "costOverRide", "costOverRideReason", "ProjectId", "CostPackageId"];

/**
 * Find financeModel by id
 * Note: This is called every time that the parameter :financeModelId is used in a URL. 
 * Its purpose is to preload the financeModel on the req object then call the next function. 
 */
exports.financeModel = function(req, res, next, id) {
    console.log('id => ' + id);
    db.FinanceModel.find({ where: {id: id}, include: [db.Project, db.financeModelItem, db.financeModelItemLine, db.CostPackage] }).success(function(financeModel){
        if(!financeModel) {
            return next(new Error('Failed to load financeModel ' + id));
        } else {
            req.financeModel = financeModel;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a financeModel
 */
exports.create = function(req, res) {
    // augment the financeModel by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of financeModel on the res object. 
    db.FinanceModel.create(
        _.pick ( req.body, financeModelAllowedFields )
    ).success(function(financeModel){
        if(!financeModel){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(financeModel);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a financeModel
 */
exports.update = function(req, res) {

    // create a new variable to hold the financeModel that was placed on the req object.
    var financeModel = req.financeModel;

    financeModel.updateAttributes(
        _.pick ( req.body, financeModelAllowedFields )
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
 * Delete an financeModel
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the financeModel that was placed on the req object.
    var financeModel = req.financeModel;

    financeModel.destroy().success(function(){
        return res.jsonp(financeModel);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an financeModel
 */
exports.show = function(req, res) {
    // Sending down the financeModel that was just preloaded by the financeModels.financeModel function
    // and saves financeModel on the req object.
    return res.jsonp(req.financeModel);
};

/**
 * List of financeModels
 */
exports.all = function(req, res) {
    var projectId = req.query.projectId;

    db.FinanceModel.findAll({where: {ProjectId: projectId}, include: [db.Project, db.financeModelItem, db.financeModelItemLine, db.CostPackage]}).success(function(financeModels){
        return res.jsonp(financeModels);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
