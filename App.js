/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import InnerApp from './src/InnerApp';
import { Provider } from "react-redux";
import {StyleSheet} from 'react-native';
import store from './store';
import LoginStack from './src/Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <InnerApp />
    );
  }
}