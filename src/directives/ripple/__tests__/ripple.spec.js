"use strict";
exports.__esModule = true;
// Libraries
var vue_1 = require("vue");
// Directives
var __1 = require("../");
// Utilities
var test_utils_1 = require("@vue/test-utils");
describe('ripple.ts', function () {
    it('Ripple with no value should render element with ripple enabled', function () {
        var testComponent = vue_1["default"].component('test', {
            directives: {
                Ripple: __1["default"]
            },
            render: function (h) {
                var data = {
                    directives: [{
                            name: 'ripple'
                        }]
                };
                return h('div', data);
            }
        });
        var wrapper = test_utils_1.mount(testComponent);
        var div = wrapper.find('div');
        expect(div.element['_ripple'].enabled).toBe(true);
    });
    it('Ripple should update element property reactively', function () {
        var testComponent = vue_1["default"].component('test', {
            directives: {
                Ripple: __1["default"]
            },
            props: {
                ripple: Boolean,
                "default": function () { return false; }
            },
            render: function (h) {
                var data = {
                    directives: [{
                            name: 'ripple',
                            value: this.ripple
                        }]
                };
                return h('div', data);
            }
        });
        var wrapper = test_utils_1.mount(testComponent, {
            propsData: {
                ripple: true
            }
        });
        var div = wrapper.find('div');
        expect(div.element['_ripple'].enabled).toBe(true);
        wrapper.setProps({ ripple: false });
        expect(div.element['_ripple'].enabled).toBe(false);
        wrapper.setProps({ ripple: true });
        expect(div.element['_ripple'].enabled).toBe(true);
    });
});
