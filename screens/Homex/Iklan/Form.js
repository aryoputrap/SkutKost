import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import { Text,  Button,} from 'react-native-paper';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import Searchinput from '../../../component/Searchinput'
import Mapiklan from './Mapiklan'
import { Container,Content,} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import Map from './Mapiklan';

class IklanForm extends React.Component{

    handleGoBack = () => {
        this.props.navigation.navigate("Home");
      };

    render() {

        const autoFocus = this.props.navigation.getParam("autoFocus", false);

        var jenis_kost = [
            {label: 'Campur', value: 0 },
            {label: 'Pria', value: 1},
            {label: 'Putri', value: 2},
          ];
          var kategori_kost = [
            {label: 'Hotel', value: 0 },
            {label: 'Apartemen', value: 1},
            {label: 'Losmen', value: 2},
          ];

        return (
        
        <Container>
        <Content>
            <Searchinput
                handleGoBack={this.handleGoBack}
                icon="ios-arrow-round-back"
                size={35}
                style={styles.Searchbar}
            />
                
            <View>

                <View>
    
                <Dropdown
                    label='Jenis Kost'
                    data={jenis_kost}
                    />
    
                    <TextInput placeholder="Nama Kost" placeholderTextColor="black" 
                    style={styles.input} />

                    <TextInput placeholder="Alamat Kost" placeholderTextColor="black"
                    style={styles.input} />

                    <Dropdown
                    label='Kategori Kost'
                    data={kategori_kost}
                    />

                    <TextInput placeholder="Luas Kost" placeholderTextColor="black"
                    style={styles.input} />

                    <Text>Search alamat/area kost anda di Peta, kemudian pindahkan pin di Peta ke lokasi tepat kost anda</Text>

                    <View>
                    <Button style={styles.Searchbar}  icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
                    </View>
                    
                    <View style={{width: null, height: 200, marginBottom: 35, marginTop: 10}}>
                    <Text>Copas Mapsnya Disini</Text>
                    <Map marginLeft={100}/>
                    </View>

                    <View style={{flexDirection: 'row', alignItems: 'space-between' }}>
                    <TextInput placeholder="Latitude" placeholderTextColor="black"
                    style={styles.latlong} />

                    <TextInput placeholder="Longitude" placeholderTextColor="black"
                    style={styles.latlong} />
                    </View>

                    <TextInput placeholder="Pengelola Kost" placeholderTextColor="black"
                    style={styles.input} />

                    <TextInput placeholder="No.Hp Pengelola Kost" placeholderTextColor="black"
                    style={styles.input} />

                    <TextInput placeholder="Harga Bulanan" placeholderTextColor="black"
                    style={styles.input} />

                    <Button style={styles.button} mode="contained" marginBottom={10} onPress={() => console.log('Pressed')}>
                        <Text style={styles.title2}>Upload Foto</Text>
                    </Button>

                    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                        <Text style={styles.title2}>Pasang Iklan</Text>
                    </Button>
                </View>

               </View>
           
        </Content>
        </Container>    
        
        )

}

}

const styles = StyleSheet.create({

    input: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginTop:10,
        marginBottom: 10,
        color: '#000',
        borderRadius: 20,
        textAlign: 'left',
        marginRight:20,
        marginLeft:20
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight:20,
        marginLeft:20,
        alignItems:'center'
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
    title2: {
      fontWeight: 'bold',
      color: '#FFF',
      marginBottom:30,
      marginEnd:10,
      marginVertical:10
    },
    radio: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom:10,
        paddingRight:10,
      },

    Searchbar: {
        borderRadius: 20,
        width: null,
        height: 40,
        marginTop: 10,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginRight: 30,
        marginLeft: 30
        },
        Aheader: {
            backgroundColor: '#e67e22',
            fontWeight: 'bold',
           marginHorizontal:130
          },
    latlong: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginBottom: 5,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
        width: 150,
        marginRight: 30,
        marginLeft: 30

    }
})

export default IklanForm