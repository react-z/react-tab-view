"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/**
 * Tab module
 * A simple tab component.
**/

var Tab = _react2["default"].createClass({ displayName: "Tab",
  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return _react2["default"].createElement("div", { className: "react-tab hidden" }, this.props.children);
  }
});

module.exports = Tab;