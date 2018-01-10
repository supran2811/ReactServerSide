'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = function user(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-3497455170'
    }, _react2.default.createElement(_style2.default, {
        styleId: '3497455170',
        css: ['p.jsx-3497455170{background:white;border:2px solid red;box-shadow:2px 3px #ccc;text-align:center;}']
    }), _react2.default.createElement('h1', {
        className: 'jsx-3497455170'
    }, 'Name: ', props.name), _react2.default.createElement('p', {
        className: 'jsx-3497455170'
    }, 'Age : ', props.age));
};

exports.default = user;