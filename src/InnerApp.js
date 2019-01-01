import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
// import navigation from '../actions/Navigation';
// import {Root, View} from 'native-base';
// import {setCurrentUser} from '../actions/authActions';
// import {StyleSheet} from 'react-native';

import LoginStack from './Router';

class InnerApp extends Component {
    render() {
        return(
            <LoginStack />
        );
    }
}

export default InnerApp;