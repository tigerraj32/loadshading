import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
} from 'react-native';

var {height, width} = Dimensions.get('window');
const on=require('./icon/on.png');
const off=require('./icon/off.png');
const days = ['Sunday','Monday','Tuesday','Wenesday', 'Thursday','Friday','Saturday'];
export default class GroupCell extends Component {
  render(){

      const currentdate = new Date();
      const from  = this.props.item.from.split(":");
      const to  = this.props.item.to.split(":");

      const fromDate = new Date(currentdate.getFullYear(),currentdate.getMonth(),currentdate.getDay(),from[0] ,from[1],currentdate.getSeconds(),0);
      const toDate = new Date(currentdate.getFullYear(),currentdate.getMonth(),currentdate.getDay(),to[0] ,to[1],currentdate.getSeconds(),0);
      console.log(this.props.item.from + '  ' + this.props.item.to);
      console.log('currentdate: '+ currentdate + ' fromDate: ' +fromDate +' toDate ' + toDate);
      console.log(fromDate.getTime() + ' -- ' +toDate .getTime() + ' ---- '+ currentdate.getTime());


    return(
      <View style={styles.container}>
        <View style={styles.date}>
          <Text > {days[this.props.rowID]} </Text>
        </View>

        <View style={styles.time}>
          <Text > {this.props.item.from} - {this.props.item.to}  </Text>
        </View>
        <View style={styles.status}>
          {
            (currentdate.getDay()==this.props.rowID)
            ?<Image source={(currentdate.getTime()>=fromDate.getTime() && currentdate.getTime() <= toDate.getTime())?off:on} style={styles.icon}/>
            :null
          }
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
            height:60, width:width,
            backgroundColor:'white',
            justifyContent:'center',
            flexDirection:'row',
            justifyContent:'space-between',
          },
  date:{
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'yellow',
    flex:0.2
  },
  time:{
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor:'blue',
    flex:0.6
  },
  status:{
    alignItems:'center',
    justifyContent:'center',
    flex:0.1
  },
  icon:{
    height:20,
    width:20
  }


});
