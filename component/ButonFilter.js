import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Button  } from 'react-native-paper';
import { withNavigation } from 'react-navigation';


export default class List extends Component {
  render() {
    return (
        
        <View style={{position:'absolute', bottom: 0, flexDirection:'row', flex: 1, alignSelf: 'center', paddingBottom:15}}>
        <Button
        onPress={() =>alert('Ini Filter')}
        style={styles.Button} icon="art-track" size={50} color={'#e67e22'} mode={'outlined'}>
          <Text>Filter</Text>
        </Button>
        <Button
         onPress={() => alert('Ini Urutkan')}
         style={styles.Button} icon="low-priority" size={50} color={'#e67e22'} mode={'outlined'}>
          <Text>Urutkan</Text>
        </Button>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({

Button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',

    },
Bar: {
    maxWidth:6,
    height: 40,
    backgroundColor: 'white',
    },
Viewx:{
    marginLeft:30,
}

})