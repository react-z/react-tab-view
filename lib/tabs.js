"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/**
 * Tabs module
 * A simple tab component.
**/

var Tabs = _react2["default"].createClass({ displayName: "Tabs",
  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {
    // set 1st tab and tab header as active
    var tabs = this.refs.tabs.getDOMNode().children[0].className = "react-tab";
    this.refs["list0"].getDOMNode().className = "selected";
  },
  componentWillUnmount: function componentWillUnmount() {},
  /** 
   * Tab has changed 
  **/
  changeTab: function changeTab(e) {
    var id = e.target.getAttribute("data-tab-id");
    this.setActiveTab(id);

    var list = e.target.parentElement.parentElement.children;
    this.setActiveTabHeader(list, id);
  },
  /** 
   * Set the active tab by id 
  **/
  setActiveTab: function setActiveTab(id) {
    // hide all tab content   
    var tabs = this.refs.tabs.getDOMNode().children;
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].className = "react-tab hidden";
    }
    // set selected tab content as visible
    tabs[id].className = "react-tab";
  },
  /** 
   * Set the active tab header in the list by id 
  **/
  setActiveTabHeader: function setActiveTabHeader(list, id) {
    // set all headings as deselected
    for (var i = 0; i < list.length; i++) {
      list[i].className = "";
    }
    // set selected heading as selected
    list[id].className = "selected";
  },
  render: function render() {

    var headers = this.props.headers.map((function (h, i) {
      return _react2["default"].createElement("li", { ref: "list" + i, key: i }, _react2["default"].createElement("a", { "data-tab-id": i, onClick: this.changeTab }, h));
    }).bind(this));

    return _react2["default"].createElement("div", { className: "react-tabs" }, _react2["default"].createElement("div", { className: "menu" }, _react2["default"].createElement("ul", null, headers)), _react2["default"].createElement("div", { className: "tab-content", ref: "tabs" }, this.props.children));
  }

});

module.exports = Tabs;