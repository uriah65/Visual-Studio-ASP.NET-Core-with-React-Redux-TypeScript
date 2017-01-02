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
})(["require", "exports", "redux"], function (require, exports) {
    "use strict";
    var Redux = require("redux");
    var message = 'initial message';
    var initialState = {
        message: 'welcome',
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
    exports.asyncSetMessage = function (comment) {
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
    exports.store = finalCreateStore(reducer);
});
//# sourceMappingURL=app-store.js.map