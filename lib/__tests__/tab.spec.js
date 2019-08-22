"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _tab = _interopRequireDefault(require("../tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Tab renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_tab.default, null, _react.default.createElement("span", null, "Test tab content")));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('YearMonthPicker renders the correct elements and props', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_tab.default, null, _react.default.createElement("span", null, "Test tab content")));
  expect(wrapper.find('span').length).toEqual(1);
  expect(wrapper.find('span').text()).toContain('Test tab content'); // console.log(wrapper.debug())
});