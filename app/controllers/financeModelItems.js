/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');
var _         = require('lodash');


var financeModelItemAllowedFields = ["partyId", "partyName", "itemName", "agreementId", "agreementStatus", "actualDate", "agreementType", "FinanceModelItemId"];

/**
 * Find financeModelItem by id
 * Note: This is called every time that the parameter :financeModelItemId is used in a URL. 
 * Its purpose is to preload the financeModelItem on the req object then call the next function. 
 */
exports.financeModelItem = function(req, res, next, id) {
    console.log('id => ' + id);
    db.FinanceModelItem.find({ where: {id: id}, include: [db.financeModelItemLine] }).success(function(financeModelItem){
        if(!financeModelItem) {
            return next(new Error('Failed to load financeModelItem ' + id));
        } else {
            req.financeModelItem = financeModelItem;
            return next();            
        }
    }).error(function(err){
        return next(err);
    });
};

/**
 * Create a financeModelItem
 */
exports.create = function(req, res) {
    // augment the financeModelItem by adding the UserId
    // req.body.UserId = req.user.id;
    // save and return and instance of financeModelItem on the res object. 
    db.FinanceModelItem.create(
        _.pick ( req.body, financeModelItemAllowedFields )
    ).success(function(financeModelItem){
        if(!financeModelItem){
            return res.send('error', {errors: err});
        } else {
            return res.jsonp(financeModelItem);
        }
    }).error(function(err){
        return res.send('error', { 
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a financeModelItem
 */
exports.update = function(req, res) {

    // create a new variable to hold the financeModelItem that was placed on the req object.
    var financeModelItem = req.financeModelItem;

    financeModelItem.updateAttributes(
        _.pick ( req.body, financeModelItemAllowedFields )
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
 * Delete an financeModelItem
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the financeModelItem that was placed on the req object.
    var financeModelItem = req.financeModelItem;

    financeModelItem.destroy().success(function(){
        return res.jsonp(financeModelItem);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an financeModelItem
 */
exports.show = function(req, res) {
    // Sending down the financeModelItem that was just preloaded by the financeModelItems.financeModelItem function
    // and saves financeModelItem on the req object.
    return res.jsonp(req.financeModelItem);
};

/**
 * List of financeModelItems
 */
exports.all = function(req, res) {
    var financeModelId = req.query.financeModelId;

    db.FinanceModelItem.findAll({where: {FinanceModelId: financeModelId}, include: [db.financeModelItemLine]}).success(function(financeModelItems){
        return res.jsonp(financeModelItems);
    }).error(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
