'use strict';

var _user = require('./user');

var _repos = require('./repos');

module.exports = {
  getUser: _user.getUser,
  getUserRepos: _repos.getUserRepos
};