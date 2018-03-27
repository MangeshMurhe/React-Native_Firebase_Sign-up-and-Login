/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import SimpleList from './SimpleList'
import Mangesh from './LoginView';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';



export default class App extends Component<{}> {
  render(){
    return(
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title :'Login Screen',
        component: Mangesh,
      }}

      />
    );

  }
}
const styles = StyleSheet.create({
container:{
  flex:1,
},
});
