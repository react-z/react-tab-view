"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  height: auto;\n  margin: 0;\n  padding: 10px;\n  margin: 0 auto;\n  display: block;\n\n  .tab {\n    margin: 0;\n    padding: 10px;\n  }\n  .hidden {\n    display: none;\n  }\n  content {\n    width: 80%;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n  }\n\n  ul li {\n    display: inline;\n  }\n\n  a {\n    text-decoration: none;\n    padding: 0.5em;\n  }\n\n  .selected a {\n    color: #b7b7b7 !important;\n  }\n\n  a:hover {\n    color: #b7b7b7;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Tabs module
 * A simple tab component.
 **/
var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  _createClass(Tabs, null, [{
    key: "propTypes",
    get: function get() {
      return {
        onChangeTab: _propTypes.default.func,
        children: _propTypes.default.array.isRequired,
        headers: _propTypes.default.array.isRequired
      };
    }
  }]);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.changeTab = _this.changeTab.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // set 1st tab and tab header as active
      this.refs.tabs.children[0].className = 'react-tab';
      this.refs['list0'].className = 'selected';
    }
  }, {
    key: "changeTab",
    value: function changeTab(e) {
      if (this.props.onChangeTab !== undefined) {
        this.props.onChangeTab(e);
      }

      var id = e.target.getAttribute('data-tab-id');
      this.setActiveTab(id);
      var list = e.target.parentElement.parentElement.children;
      this.setActiveTabHeader(list, id);
    }
  }, {
    key: "setActiveTab",
    value: function setActiveTab(id) {
      // hide all tab content
      var tabs = this.refs.tabs.children;

      for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = 'tab hidden';
      } // set selected tab content as visible


      tabs[id].className = 'tab';
    }
  }, {
    key: "setActiveTabHeader",
    value: function setActiveTabHeader(list, id) {
      // set all headings as deselected
      for (var i = 0; i < list.length; i++) {
        list[i].className = '';
      } // set selected heading as selected


      list[id].className = 'selected';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var headers = this.props.headers.map(function (h, i) {
        return _react.default.createElement("li", {
          key: i,
          ref: 'list' + i
        }, _react.default.createElement("a", {
          "data-tab-id": i,
          onClick: _this2.changeTab
        }, h));
      });
      return _react.default.createElement(TabsWrapper, null, _react.default.createElement("div", null, _react.default.createElement("ul", null, headers)), _react.default.createElement("div", {
        className: "content",
        ref: "tabs"
      }, this.props.children));
    }
  }]);

  return Tabs;
}(_react.Component);

var _default = Tabs;
exports.default = _default;

var TabsWrapper = _styledComponents.default.div(_templateObject());