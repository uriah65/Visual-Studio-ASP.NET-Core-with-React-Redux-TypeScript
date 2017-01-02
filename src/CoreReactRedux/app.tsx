// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import *  as React from 'react'
import *  as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as Store from './app-store'





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
            dispatch(Store.asyncSetMessage(newText));
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
    <ReactRedux.Provider store={Store.store}>
        <MyConnectedComponent />
    </ReactRedux.Provider>,
    document.getElementById('reactRoot')
);