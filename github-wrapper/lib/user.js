'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = undefined;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUser = exports.getUser = function getUser(username) {
  return fetch(_config2.default.GITHUB_URL + '/users/' + username).then(_utils.toJson);
};