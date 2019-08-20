import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, View,TouchableOpacity, Image} from 'react-native';
import { Button,IconButton, Appbar, } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Kostdeskripsi from './Kostdeskripsi'
import Kosthubungi from './Kosthubungi'
import Kostmenarik from './Kostmenarik'
import Mapdetail from './Mapdetail'
import ListItem from "./../../Listkota/ListItem";
import Searchinput from '../../../component/Searchinput'




export default class List extends Component {

  handleGoBack = () => {
    this.props.navigation.navigate("Home");
  };
  
  constructor() {
    super();
    this.state = {
      isFotoState: true
    };
  }
  static navigationOptions = {
    title: 'Detail Kos',
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#2d3c4d',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, headerRight: (
      <TouchableOpacity onPress={() => alert('Share Btn')} style={{ marginRight: 10 }}>
        <IonIcon name='ios-git-merge' size={30} color='white' />
      </TouchableOpacity>
    )
  };

  state = {
    isPhoto:true
  }
  
  renderPhoto(isPhoto){
    if(isPhoto){
      return (
        <Image source={{uri:"https://www.kostjakarta.net/wp-content/uploads/2015/12/488761.jpeg"}} style={{width:400, height:300}} ></Image>
      )
    }else{
      return (<Mapdetail/>)
    }
  }

  

  render() {
    return (
        <Container>
          <Content>
          <Searchinput
          handleGoBack={this.handleGoBack}
          icon="ios-arrow-round-back"
          size={35}
          style={styles.Searchbar}
           />

            {this.renderPhoto(this.state.isPhoto)}
            <View style={{flexDirection:'row'}}>
                <Button
                onPress={this.props.Homedetail}
                style={styles.Button}
                mode={'contained'}
                marginLeft={1}
                onPress={()=>this.setState({isPhoto:true})}>
                 <Icon alignContent='center' name="home" size={30} color={'#FFFF'}/>
                </Button>
                <Button
                mode={'contained'}
                style={styles.Button}
                marginRight={10}
                onPress={()=>this.setState({isPhoto:false})}>
                <Icon name="earth" size={30} color={'#FFFF'}  />
                </Button>

              
              </View>
              <View style={{flexDirection:'row'}}>
              <IconButton
                  icon="favorite-border"
                  color={'#e67e22'}
                  size={20}
                  onPress={() => console.log('Pressed')}/>
               <IconButton
                  icon="share"
                  color={'#e67e22'}
                  size={20}
                  onPress={() => console.log('Pressed')}/>
              </View>
            <Kostdeskripsi/>
            <Kostmenarik/>
            {/* <Kosthubungi/> */}
        <View style={styles.btnContainer}>
          <View marginLeft={300}>
               <Text size={20} fontWeight={200}>Rp. 1.289.000/Bulan</Text>
          </View>
           
                <TouchableOpacity
                style={styles.btn} 
                onPress={() => this.props.navigation.navigate("Hubungi")}
              >
                <Text style={styles.btnBooking}>Hubungi Kost</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("Booking")}
              >
                <Text style={styles.btnBooking}>Booking</Text>
              </TouchableOpacity>
        </View>
          </Content>
        </Container>
        
    );
  }
}

const styles = StyleSheet.create({

    Button: {
      width: 220,
      height: 40,
      color:'black',
      marginRight:1,
      alignContent:'center',
      backgroundColor:'#e67e22',
      },btnContainer: { flexDirection: "row", justifyContent: "flex-end" },
  hargaContainer: {
    flex: 1
  },
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
  harga: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "500"
  },
  btnHubungiKos: {
    padding: 4,
    borderColor: "#2980b9",
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    textAlign: "center"
  },
  btnBooking: {
    padding: 5,
    width: 80,
    color: "#fff",
    textAlign: "center"
  },
  btn: {
    borderRadius: 5,
    height: 45,
    backgroundColor: '#e67e22',
    justifyContent: "center",
    marginRight:20
  },
})
