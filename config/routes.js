
var users       = require('../app/controllers/users');
var projects    = require('../app/controllers/projects');
var milestones    = require('../app/controllers/milestones');
var financeModels    = require('../app/controllers/financeModels');
var financeModelItems    = require('../app/controllers/financeModelItems');
var financeModelItemLines    = require('../app/controllers/financeModelItemLines');
var costPackages    = require('../app/controllers/costPackages');
var costPackageLines    = require('../app/controllers/costPackageLines');
var index       = require('../app/controllers/index');

exports.init = function(app, passport, auth) {

    console.log('Initializing Routes');

    // User Routes
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);
    app.get('/users/me', users.me);

    // Setting up the users api
    app.post('/users', users.create);

    // Setting the local strategy route
    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), users.session);

    // Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    // Finish with setting up the userId param
    app.param('userId', users.user);

    // Article Routes
    // app.get('/articles', articles.all);
    // app.post('/articles', auth.requiresLogin, articles.create);
    // app.get('/articles/:articleId', articles.show);
    // app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
    // app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

    // Finish with setting up the articleId param
    // Note: the articles.article function will be called everytime then it will call the next function. 
    // app.param('articleId', articles.article);

    // Project
    app.get('/projects', projects.all);
    app.post('/projects', projects.create);
    app.get('/projects/:projectId', projects.show);
    app.put('/projects/:projectId', projects.update);
    app.del('/projects/:projectId', projects.destroy);
    app.post('/projects/:projectId/users', projects.addUser);
    app.del('/projects/:projectId/users', projects.removeUser);
    app.param('projectId', projects.project);

    // Milestones
    app.get('/milestones', milestones.all);
    app.post('/milestones', milestones.create);
    app.get('/milestones/:milestoneId', milestones.show);
    app.put('/milestones/:milestoneId', milestones.update);
    app.del('/milestones/:milestoneId', milestones.destroy);
    app.param('milestoneId', milestones.milestone);

    // Finances
    app.get('/financeModels', financeModels.all);
    app.post('/financeModels', financeModels.create);
    app.get('/financeModels/:financeModelId', financeModels.show);
    app.put('/financeModels/:financeModelId', financeModels.update);
    app.del('/financeModels/:financeModelId', financeModels.destroy);
    app.param('financeModelId', financeModels.financeModel);
    // Finances Model Item
    app.get('/financeModelItems', financeModelItems.all);
    app.post('/financeModelItems', financeModelItems.create);
    app.get('/financeModelItems/:financeModelItemId', financeModelItems.show);
    app.put('/financeModelItems/:financeModelItemId', financeModelItems.update);
    app.del('/financeModelItems/:financeModelItemId', financeModelItems.destroy);
    app.param('financeModelItemId', financeModelItems.financeModelItem);
    // Finances Model Item
    app.get('/financeModelItemLines', financeModelItemLines.all);
    app.post('/financeModelItemLines', financeModelItemLines.create);
    app.get('/financeModelItemLines/:financeModelItemLineId', financeModelItemLines.show);
    app.put('/financeModelItemLines/:financeModelItemLineId', financeModelItemLines.update);
    app.del('/financeModelItemLines/:financeModelItemLineId', financeModelItemLines.destroy);
    app.param('financeModelItemLineId', financeModelItemLines.financeModelItemLine);

    // Cost Package
    app.get('/costPackages', costPackages.all);
    app.post('/costPackages', costPackages.create);
    app.get('/costPackages/:costPackageId', costPackages.show);
    app.put('/costPackages/:costPackageId', costPackages.update);
    app.del('/costPackages/:costPackageId', costPackages.destroy);
    app.param('costPackageId', costPackages.costPackage);
    // Cost Package Line
    app.get('/costPackageLines', costPackageLines.all);
    app.post('/costPackageLines', costPackageLines.create);
    app.get('/costPackageLines/:costPackageLineId', costPackageLines.show);
    app.put('/costPackageLines/:costPackageLineId', costPackageLines.update);
    app.del('/costPackageLines/:costPackageLineId', costPackageLines.destroy);
    app.param('costPackageLineId', costPackageLines.costPackageLine);

    // Home route
    app.get('/', index.render);

};
