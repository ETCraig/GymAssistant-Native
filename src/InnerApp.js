import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import Navigation from '../actions/Navigation';
import {Root} from 'native-base';
import {StyleSheet} from 'react-native';

import {LoginStack, InnerStack} from './Router';

class InnerApp extends React.Component {
    state = {
        bool: false
    }
    render() {
        let NavigationStack = bool ? (
            <Root>
                <InnerStack 
                    ref={navigatorRef => {
                        Navigation.setTopLevelNavigator(navigatorRef);
                    }}
                />
            </Root>
        ) : (
            <LoginStack />
        );
        return(
            NavigationStack
        );
    }
}

export default InnerApp;