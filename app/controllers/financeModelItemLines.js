/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var financeModelItemLineAllowedFields = ["accountingType", "rateName", "financialType", "flatAmount", "scaleAmount", "percentage", "FinanceModelItemId"];

/**
 * Find financeModelItemLine by id
 * Note: This is called every time that the parameter :financeModelItemLineId is used in a URL. 
 * Its purpose is to preload the financeModelItemLine on the req object then call the next function. 
 */
exports.financeModelItemLine = function(req, res, next, id) {
    console.log('id => ' + id);
    db.FinanceModelItemLine.find({ where: {id: id} }).success(function(financeModelItemLine){
        if(!financeModelItemLine) {
            return next(new Error('Failed to load financeModelItemLine ' + id));
        } else {
            req.financeModelItemLine = financeModelItemLine;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a financeModelItemLine
 */
exports.create = function(req, res) {
    // augment the financeModelItemLine by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of financeModelItemLine on the res object. 
    db.FinanceModelItemLine.create(
        _.pick ( req.body, financeModelItemLineAllowedFields )
    ).success(function(financeModelItemLine){
        if(!financeModelItemLine){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(financeModelItemLine);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a financeModelItemLine
 */
exports.update = function(req, res) {

    // create a new variable to hold the financeModelItemLine that was placed on the req object.
    var financeModelItemLine = req.financeModelItemLine;

    financeModelItemLine.updateAttributes(
        _.pick ( req.body, financeModelItemLineAllowedFields )
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
 * Delete an financeModelItemLine
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the financeModelItemLine that was placed on the req object.
    var financeModelItemLine = req.financeModelItemLine;

    financeModelItemLine.destroy().success(function(){
        return res.jsonp(financeModelItemLine);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an financeModelItemLine
 */
exports.show = function(req, res) {
    // Sending down the financeModelItemLine that was just preloaded by the financeModelItemLines.financeModelItemLine function
    // and saves financeModelItemLine on the req object.
    return res.jsonp(req.financeModelItemLine);
};

/**
 * List of financeModelItemLines
 */
exports.all = function(req, res) {
    var financeModelItemId = req.query.financeModelItemId;

    db.FinanceModelItemLine.findAll({where: {FinanceModelItemId: financeModelItemId}}).success(function(financeModelItemLines){
        return res.jsonp(financeModelItemLines);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
