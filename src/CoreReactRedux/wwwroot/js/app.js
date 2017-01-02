// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "react", "react-dom", "react-redux", "./app-store"], function (require, exports) {
    "use strict";
    var React = require("react");
    var ReactDOM = require("react-dom");
    var ReactRedux = require("react-redux");
    var Store = require("./app-store");
    var MyComponentState = function (state) {
        return {
            message: state.message,
        };
    };
    var MyComponentDispatch = function (dispatch) {
        return {
            setMessage: function (newText) {
                dispatch({
                    type: 'set-message',
                    comment: newText,
                });
            },
            setDelayed: function (newText) {
                dispatch(Store.asyncSetMessage(newText));
            }
        };
    };
    var MyComponent = (function (_super) {
        __extends(MyComponent, _super);
        function MyComponent() {
            return _super.apply(this, arguments) || this;
        }
        MyComponent.prototype.onClick = function (text) {
            this.props.setMessage(text);
        };
        MyComponent.prototype.onClick2 = function (text) {
            this.props.setDelayed(text);
        };
        MyComponent.prototype.render = function () {
            return React.createElement("div", null,
                React.createElement("button", { onClick: this.onClick.bind(this, 'first button') }, "synch action one"),
                React.createElement("button", { onClick: this.onClick.bind(this, 'second button') }, "synh action swo"),
                React.createElement("button", { onClick: this.onClick2.bind(this, 'delayed message arrived') }, "async action"),
                React.createElement("div", null,
                    "Message from the store: ",
                    React.createElement("b", null, this.props.message)));
        };
        return MyComponent;
    }(React.Component));
    var MyConnectedComponent = ReactRedux.connect(MyComponentState, MyComponentDispatch)(MyComponent);
    ReactDOM.render(React.createElement(ReactRedux.Provider, { store: Store.store },
        React.createElement(MyConnectedComponent, null)), document.getElementById('reactRoot'));
});
//# sourceMappingURL=app.js.map