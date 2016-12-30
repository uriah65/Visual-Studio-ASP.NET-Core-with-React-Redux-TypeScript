// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports", "react", "react-dom", "redux", "react-redux"], function (require, exports) {
    "use strict";
    var React = require("react");
    var ReactDOM = require("react-dom");
    var Redux = require("redux");
    var ReactRedux = require("react-redux");
    var initialState = {
        message: 'initial state message',
    };
    var reducer = function (state, action) {
        if (state === undefined) {
            return initialState;
        }
        var newState = state;
        switch (action.type) {
            case 'set-message':
                return __assign({}, state, { message: action.comment });
        }
        return state;
    };
    var asyncSetMessage = function (comment) {
        return function (dispatch) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function (e) {
                var x = JSON.parse(xhr.responseText);
                dispatch({
                    type: 'set-message',
                    comment: x.title
                });
            };
            xhr.onerror = function (xhr) {
                dispatch({
                    type: 'set-message',
                    comment: 'ERROR HAS OCCURRED',
                });
            };
            xhr.send();
        };
    };
    var asyncSetMessage2 = function (comment) {
        return function (dispatch) {
            setTimeout(function () {
                dispatch({
                    type: 'set-message',
                    comment: comment
                });
            }, 2000);
        };
    };
    var thunkMiddleware = function (_a) {
        var dispatch = _a.dispatch, getState = _a.getState;
        // console.log('Enter thunkMiddleware');
        return function (next) {
            // console.log('Function "next" provided:', next);
            return function (action) {
                // console.log('Handling action:', action);
                return typeof action === 'function' ?
                    action(dispatch, getState) :
                    next(action);
            };
        };
    };
    //var store = Redux.createStore(reducer, initialState);
    var finalCreateStore = Redux.applyMiddleware(thunkMiddleware)(Redux.createStore);
    var store = finalCreateStore(reducer);
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
                dispatch(asyncSetMessage(newText));
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
    ReactDOM.render(React.createElement(ReactRedux.Provider, { store: store },
        React.createElement(MyConnectedComponent, null)), document.getElementById('reactRoot'));
});
//# sourceMappingURL=app.js.map