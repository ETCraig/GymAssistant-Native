import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Root} from 'native-base';
import {StyleSheet} from 'react-native';

import {LoginStack} from './Router';

class InnerApp extends React.Component {
    render() {
        return(
            <View>
                <LoginStack />
            </View>
        );
    }
}

export default InnerApp;