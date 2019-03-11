// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('newproject', () => App);




import {
    AppRegistry,
} from 'react-native';

import RootReducer from './src/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import Myapp from './App';

import React, { Component } from 'react';



export const store = createStore(
    RootReducer,
    undefined,
    // the ordering of middleßware is significant.
    applyMiddleware(thunk),
);

const ReduxApp = () => (
    <Provider store={store}>
        <Myapp />
    </Provider>
);

AppRegistry.registerComponent('newproject', () => ReduxApp);
