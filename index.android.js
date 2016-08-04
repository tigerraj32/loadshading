/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Group from './group'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Loadshading extends Component {
  render() {
    return (
      <ScrollableTabView  tabBarBackgroundColor='green' tabBarActiveTextColor='white'>
        <Group tabLabel="G1" />
        <Group tabLabel="G2" />
        <Group tabLabel="G3" />
        <Group tabLabel="G4" />
        <Group tabLabel="G5" />
        <Group tabLabel="G6" />
        <Group tabLabel="G7" />

      </ScrollableTabView>
    );
  }
}



AppRegistry.registerComponent('Loadshading', () => Loadshading);
