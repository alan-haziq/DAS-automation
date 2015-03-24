/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var costPackageLineAllowedFields = ["accountingType", "rateName", "financialType", "flatAmount", "scaleAmount", "percentage", "FinanceModelItemId"];

/**
 * Find costPackageLine by id
 * Note: This is called every time that the parameter :costPackageLineId is used in a URL. 
 * Its purpose is to preload the costPackageLine on the req object then call the next function. 
 */
exports.costPackageLine = function(req, res, next, id) {
    console.log('id => ' + id);
    db.CostPackageLine.find({ where: {id: id} }).success(function(costPackageLine){
        if(!costPackageLine) {
            return next(new Error('Failed to load costPackageLine ' + id));
        } else {
            req.costPackageLine = costPackageLine;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a costPackageLine
 */
exports.create = function(req, res) {
    // augment the costPackageLine by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of costPackageLine on the res object. 
    db.CostPackageLine.create(
        _.pick ( req.body, costPackageLineAllowedFields )
    ).success(function(costPackageLine){
        if(!costPackageLine){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(costPackageLine);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a costPackageLine
 */
exports.update = function(req, res) {

    // create a new variable to hold the costPackageLine that was placed on the req object.
    var costPackageLine = req.costPackageLine;

    costPackageLine.updateAttributes(
        _.pick ( req.body, costPackageLineAllowedFields )
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
 * Delete an costPackageLine
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the costPackageLine that was placed on the req object.
    var costPackageLine = req.costPackageLine;

    costPackageLine.destroy().success(function(){
        return res.jsonp(costPackageLine);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an costPackageLine
 */
exports.show = function(req, res) {
    // Sending down the costPackageLine that was just preloaded by the costPackageLines.costPackageLine function
    // and saves costPackageLine on the req object.
    return res.jsonp(req.costPackageLine);
};

/**
 * List of costPackageLines
 */
exports.all = function(req, res) {
    var financeModelItemId = req.query.financeModelItemId;

    db.CostPackageLine.findAll({where: {FinanceModelItemId: financeModelItemId} }).success(function(costPackageLines){
        return res.jsonp(costPackageLines);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
