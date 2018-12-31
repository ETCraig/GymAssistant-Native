/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import InnerApp from './src/InnerApp';
import {Provider} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import store from './store';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider>
        <InnerApp />
      </Provider>
    );
  }
}