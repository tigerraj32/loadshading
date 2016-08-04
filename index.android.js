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
  ActivityIndicator,
  View
} from 'react-native';

import WebServiceHandler from 'react-native-web-service-handler';

class Loadshading extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://demo0947187.mockable.io/loadshading')
    .then((response) => {
      return response.json();
    })
    .then((response)=> {
      //console.log(response);
      this.setState({data:response});
    })
    . catch((err)=> {
	     console.error(err);
    });
  }

  render() {
    if (this.state.data.length==0) {
      return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator  color="black" size="large"/>
        </View>
      );
    }else{
    return (
      <ScrollableTabView style={{top:22}} tabBarBackgroundColor='green' tabBarActiveTextColor='white'>
        <Group tabLabel="G1" data={this.state.data[0]}/>
        <Group tabLabel="G2" data={this.state.data[1]}/>
        <Group tabLabel="G3" data={this.state.data[2]}/>
        <Group tabLabel="G4" data={this.state.data[3]}/>
        <Group tabLabel="G5" data={this.state.data[4]}/>
        <Group tabLabel="G6" data={this.state.data[5]}/>
        <Group tabLabel="G7" data={this.state.data[6]}/>
      </ScrollableTabView>
    );
  }
}
}



AppRegistry.registerComponent('Loadshading', () => Loadshading);
