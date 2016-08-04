import React,{Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import GroupCell from './group-cell';

export default class Group extends Component {
  constructor(props){
    super(props);
    var dataSource = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
      );

      this.state = {
        dataSource: dataSource.cloneWithRows(this.props.data)
      };
  }

  renderCell(item: Object,sectionID: number | string, rowID: number | string) {

    return (
       <GroupCell item={item} rowID={rowID}/>
    );
  }

  renderSeparator(sectionID: number | string,rowID: number | string, adjacentRowHighlighted: boolean ) {
    return (
      <View
        key={"SEP_" + sectionID + "_" + rowID}
        style={{height:1, backgroundColor:'gray'}}/>
    );
  }


  render(){
    return(
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCell.bind(this)}
        renderSeparator={this.renderSeparator}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode='on-drag'
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,

    alignItems:'center',
    //justifyContent:'center',

  }
})
