'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _user = require('../../components/User/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authPage = function authPage(props) {
    return _react2.default.createElement('div', null, _react2.default.createElement('h1', null, 'The Auth page --- ', props.type), _react2.default.createElement('p', null, _react2.default.createElement(_user2.default, { name: 'supran', age: 20 })));
};

authPage.getInitialProps = function (context) {
    return { type: 'Man' };
};

exports.default = authPage;