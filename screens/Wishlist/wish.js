import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, View} from 'react-native';
import { Button, Appbar  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class List extends Component {
  render() {
    return (
      <Container>
         <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Wishlist'}
            color={'white'}/>
      </Appbar.Header>
        
        <Tabs>
              <Tab heading={ <TabHeading style={{backgroundColor: '#e67e22'}}>
              <Icon name= "hearto" style={{color:'#ffff', fontSize: 20 }}/>
              <Text style={{color:'#ffff', fontWeight:'bold'}}>Favorit</Text></TabHeading>}>
                {/* parsing */}
              </Tab>
              <Tab  heading={ <TabHeading style={{backgroundColor: '#e67e22',}}>
              <Icon name="eyeo" style={{color:'#ffff', fontSize: 20}}/>
              <Text  style={{color:'#ffff', fontWeight:'bold'}} >Dilihat</Text></TabHeading>}>
                {/* parsing2 */}
              </Tab>
        </Tabs>
      
      </Container>
    );
  }
}

const styles = StyleSheet.create({

Searchbar: {
    borderRadius: 20,
    width: null,
    height: 40,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10, 
    backgroundColor: '#FFFF',
    opacity: 0.5
    },
    Aheader: {
      backgroundColor: '#e67e22',
      fontWeight: 'bold'
    },
})