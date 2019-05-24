import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Login extends Component {
  static navigationOptions = ({navigation})=>(
    
    {

  title:'Login',
    headerStyle:{
      backgroundColor:'#5f0080',
      height:50
    },
    headerTitleStyle: {
      color: 'white',
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1,
      fontSize:20,
    },
    }
  
);
  onMap = () => {
    this.props.navigation.navigate('Success');
};
  render() {
    return (
      <SafeAreaView style={styles.container} >
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, paddingBottom: 20 }}>
          <View style={styles.IMG}>
            <Image source={require('../../../images/zoylo.png')} />
          </View>
          <View style={styles.InnerView}>
            <Text style={styles.txt}>Mobile</Text>
            <TextInput style={styles.txtInput} placeholder="+91" placeholderTextColor='#898785' ></TextInput>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.txt}>Password</Text>
              <TextInput secureTextEntry={true} style={styles.txtInput} placeholder="password" placeholderTextColor='#898785' ></TextInput>
            </View>
            <TouchableOpacity style={{ marginTop: 20 }}>
              <Text style={{ color: '#A953DB' }}> Forget Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.BottomView}>
            <View style={styles.line} />
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Text style={{ color: 'black' }}>New to zoylo?</Text>
              <TouchableOpacity>
                <Text style={styles.SignUptxt}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => this.onMap()} style={styles.ButtonSignup}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop:30,
  },
  IMG: {
    flex: 0.1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  InnerView: {
    flex: 0.6,

    padding: 30,
  },
  txt: {
    color: '#5A5957',
  },
  txtInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
  },
  BottomView: {
    marginTop: 100,
    marginBottom: 50,

    alignItems: 'center',

  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    width: 250,
  },
  SignUptxt: {
    color: '#A447DA',
    fontWeight: 'bold',
    fontSize: 15
  },
  ButtonSignup: {
    backgroundColor: '#f9a64a',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    height: 50,
    position: 'absolute',
    bottom: 0,
  }
});

