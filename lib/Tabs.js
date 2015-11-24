'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tabs module
 * A simple tab component.
**/

var Tabs = (function (_Component) {
  _inherits(Tabs, _Component);

  _createClass(Tabs, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        classPrefix: 'react-tabs'
      };
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        classPrefix: _react.PropTypes.string,
        onChangeTab: _react.PropTypes.func,
        children: _react.PropTypes.array.isRequired,
        headers: _react.PropTypes.array.isRequired
      };
    }
  }]);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));

    _this.state = {};
    _this.changeTab = _this.changeTab.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // set 1st tab and tab header as active
      this.refs.tabs.children[0].className = 'react-tab';
      this.refs['list0'].className = 'selected';
    }
  }, {
    key: 'changeTab',
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
    key: 'setActiveTab',
    value: function setActiveTab(id) {
      // hide all tab content
      var tabs = this.refs.tabs.children;
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = 'react-tab hidden';
      }
      // set selected tab content as visible
      tabs[id].className = 'react-tab';
    }
  }, {
    key: 'setActiveTabHeader',
    value: function setActiveTabHeader(list, id) {
      // set all headings as deselected
      for (var i = 0; i < list.length; i++) {
        list[i].className = '';
      }
      // set selected heading as selected
      list[id].className = 'selected';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var headers = this.props.headers.map(function (h, i) {
        return _react2.default.createElement(
          'li',
          { key: i, ref: 'list' + i },
          _react2.default.createElement(
            'a',
            { 'data-tab-id': i, onClick: _this2.changeTab },
            h
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: this.props.classPrefix },
        _react2.default.createElement(
          'div',
          { className: 'header' },
          _react2.default.createElement(
            'ul',
            null,
            headers
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab-content', ref: 'tabs' },
          this.props.children
        )
      );
    }
  }]);

  return Tabs;
})(_react.Component);

exports.default = Tabs;