import * as React from 'react';
import { View, Image, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Text, Appbar, Button, } from 'react-native-paper';
// import ProfilNav from '../../navigator/Profilnavigasi';


class Profil extends React.Component{

render() {

    return (
      
    <ScrollView style={{backgroundColor: '#FFFF'}}>
      <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Profil'}
            color={'white'}/>
      </Appbar.Header>

      <View style={styles.container}>
          

            <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('./login.png')}/>

            <Text style={styles.title2}>Ayo Login Dan Cari Kostan yang cocok sama kantong kamu</Text>

            <View style={styles.button}>
            <Button style={styles.login} mode="contained" onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.title}> Login </Text> </Button>
              
             <View style={styles.button}> 
              <Button style={styles.login} mode="contained" onPress={() => this.props.navigation.navigate('Daftar')}>
              <Text style={styles.title}>Daftar</Text> </Button>
            </View>
            </View>
            </View>
      </View>
    </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  Aheader: {
    backgroundColor: '#e67e22',
    fontWeight: 'bold'
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },

  logo: {
    justifyContent: 'center',
    marginTop: 100
  },

  login: {
    borderRadius: 20,
    width: null,
    height: 40,
    backgroundColor: '#e67e22',
    },

    title :{
     color: '#FFFFFF'
    },

    title2 :{
      color: '#16a085',
      marginTop: 20,
      width: 250,
      textAlign: 'center',
      opacity: 0.8,
      fontSize: 15
     },

     button: {
       width: 300,
       marginVertical: 50,
       alignContent: 'center',
     },

})



export default Profil