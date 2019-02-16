let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next){
    if(req.user)
        next();
    else
        next(createError(404, "Page does not exits."));
}

exports.hasAuth = function(req, res, next){
    if(req.user && req.user.isAdmin == true)
        next();
    else
        next(createError(404, "Page does not exists"));
}