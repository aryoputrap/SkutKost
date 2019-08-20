import HomeRender from './HomeRender'
import React, { Component } from 'react';
import Homenavigasi from '../../navigator/Homenavigasi'
import { View, StatusBar} from "react-native";



class Home extends Component {
  render() {
    return (
      <View>
      <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>

      <Homenavigasi/>

      </View>
    )
  }
}

export default Home