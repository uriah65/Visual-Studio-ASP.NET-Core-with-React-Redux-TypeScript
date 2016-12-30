// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import *  as React from 'react'
import *  as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as Store from './app-store'


var initialState = {
    message: Store.message as string,
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

var asyncSetMessage = function (comment : string) : any {
    return function (dispatch) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function (e : Event) {
            var x = JSON.parse(xhr.responseText);
            dispatch({
                type: 'set-message',
                comment: x.title
            });
        }
        
        xhr.onerror = function (xhr : any) {
            dispatch({
                type: 'set-message',
                comment : 'ERROR HAS OCCURRED',
            });
        }
        xhr.send();

    }
}

var asyncSetMessage2 = function (comment : string) : any {
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
var store = finalCreateStore(reducer);



var MyComponentState = function (state) {
    return {
        message: state.message as string,
    }
}

var MyComponentDispatch = function (dispatch) {
    return {
        setMessage: function (newText : string)
        {
            dispatch({
                type: 'set-message',
                comment: newText,
            })
        },
        setDelayed : function(newText: string) {
            dispatch(asyncSetMessage(newText));
        }    
    }
}

class MyComponent extends React.Component<any, any> {
    onClick(text : string) {
        this.props.setMessage(text);
    }
    onClick2(text : string) {
        this.props.setDelayed(text);
    }
    render() {
        return <div>
            <button onClick={this.onClick.bind(this, 'first button')}>synch action one</button>
            <button onClick={this.onClick.bind(this, 'second button')}>synh action swo</button>
            <button onClick={this.onClick2.bind(this, 'delayed message arrived')}>async action</button>
            <div>
                Message from the store: <b>{this.props.message}</b>            
             </div>
        </div>
    }
}


var MyConnectedComponent = ReactRedux.connect(MyComponentState, MyComponentDispatch)(MyComponent)


ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <MyConnectedComponent />
    </ReactRedux.Provider>,
    document.getElementById('reactRoot')
);