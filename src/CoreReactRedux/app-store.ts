import * as Redux from 'redux'


const message: string = 'initial message';


var initialState = {
    message: 'welcome',
}


var reducer = function (state, action) {
    if (state === undefined) {
        return initialState;
    }
    var newState = state;
    switch (action.type) {
        case 'set-message':
            return { ...state, message: action.comment };
    }
    return state;
}

export var asyncSetMessage = function (comment: string): any {
    return function (dispatch) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function (e: Event) {
            var x = JSON.parse(xhr.responseText);
            dispatch({
                type: 'set-message',
                comment: x.title
            });
        }

        xhr.onerror = function (xhr: any) {
            dispatch({
                type: 'set-message',
                comment: 'ERROR HAS OCCURRED',
            });
        }
        xhr.send();

    }
}

var asyncSetMessage2 = function (comment: string): any {
    return function (dispatch) {
        setTimeout(function () {
            dispatch({
                type: 'set-message',
                comment
            })
        }, 2000)
    }
}

var thunkMiddleware = function ({ dispatch, getState }) {
    // console.log('Enter thunkMiddleware');
    return function (next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            // console.log('Handling action:', action);
            return typeof action === 'function' ?
                action(dispatch, getState) :
                next(action)
        }
    }
}

//var store = Redux.createStore(reducer, initialState);
var finalCreateStore = Redux.applyMiddleware(thunkMiddleware)(Redux.createStore);
export var store = finalCreateStore(reducer);