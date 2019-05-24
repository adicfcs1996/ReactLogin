import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from  'react-native-simple-radio-button';
var data = [
  {label: 'Self', value: 0 },
  {label: 'Others', value: 1 },
  
];
export default class Success extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Booking Details',
    headerStyle: {
        backgroundColor: '#5f0080',
        height: 60
      },
      headerTitleStyle: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        fontSize:14,
      },
    headerTintColor: 'white',
       headerLeft:null,
  });
  onMap = () => {
    this.props.navigation.navigate('login');
};

    render() {
      return (
        <SafeAreaView style = {styles.container}>
          <ScrollView style={{ marginBottom: 50 }}>

          
          <View style={{flexDirection:'row',marginTop:10}}>
          
          <View style={{flex:1,flexDirection:'column',marginLeft:10}}>
          <Image source={require('../../../images/doctor.png')} style={styles.docImage} />
          <View style={{alignItems:'flex-start'}}>
          <Rating
          type='custom'
          ratingColor='#A1C46F'
          imageSize={15}
          readonly
          startingValue={5}
          style={{ paddingVertical: 10,marginLeft:10,}}
          />
          </View>
          
          </View> 
          
          <View style={{flex:2,marginTop:20}}>
         
          <Text style={styles.txtWeight}>Dr Isha Malhotra</Text>
          <Text style={styles.txtSize}>Dental-BDS</Text>
          <Text style={styles.txtSize} >9yrs of Experience</Text>
         
          </View> 
          
          </View>

          <View>
           
           <View style={{flexDirection:'row'}}>
             <View style={{flex:1,justifyContent:'center',alignItems:'center',}}>
               <Image source={require('../../../images/map-marker.png')} style={{height:35,width:35}}/>
             </View>
             <View style={{flex:2,marginTop:8,marginLeft:13,}}>
             <Text style={{color:'#A447DA'}}>Location</Text>
                <Text style={styles.txtSize} >Dental Solution</Text> 
                <Text style={styles.txtSize}>U-12/8, Basement, U Block, DLF </Text>
                <Text style={styles.txtSize}>Phase 3, Sector 24, Behind DLF </Text>
                <Text style={styles.txtSize}>Cyber City, Gurgoan, Haryana </Text>
                <Text style={styles.txtSize}>(122002) India</Text>
                <TouchableOpacity><Text style={{fontSize:13, color:'#57D1F6',textDecorationLine: 'underline'}}>Get Directions</Text></TouchableOpacity> 
             </View>
           </View>
         </View>
         <View style={{flexDirection:'row',padding:13,marginTop:8}}>
           <View style={{flex:1}}>
             <Image source={require('../../../images/timeline.png')} style={{height:32,width:32,marginLeft:35,}}/>
           </View>
           <View style={{flex:2}}>
             <Text style={styles.txtSize}> Wednesday, May 15 2019</Text>
             <Text style={styles.txtSize}>@15:30</Text>
           </View>
         </View>
         <View style={{padding:8,justifyContent:'center',alignItems: 'center',marginTop:13}}>
           <TouchableOpacity style={{height:35,width:250,  borderRadius: 5, borderColor: '#F3A929',borderStyle: 'dashed', borderWidth: 1,  justifyContent:'center',alignItems: 'center',}}>
             <Text style={{color:'#F3A929'}}>Select a Promo Code</Text>
           </TouchableOpacity>
         </View>

         <View>
            <View style={{flexDirection:'row',paddingLeft:40,paddingRight:40,marginTop:25}}>
              <View style={{flex:1}}>
                <Text style={styles.txtWeight}>Total Fee</Text>
              </View>
              <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end',marginRight:30}}>
                <View style={{}}>
                  <Image source={require('../../../images/rupees.png')} style={{marginRight:5,}}/>
                </View>
                <View>
                <Text style={styles.txtWeight}>300</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',paddingLeft:40,paddingRight:40,marginTop:20}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:12,color:'#A447DA'}}>Advance Payment</Text>
              </View>
              <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end',marginRight:30}}>
                <View style={{marginTop:4,}}>
                  <Image source={require('../../../images/rupees.png')} style={{marginRight:5,}}/>
                </View>
                <View>
                <Text style={{fontSize:12,color:'#A447DA'}}>45</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row',paddingLeft:40,paddingRight:40,marginTop:20}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:12,fontWeight: 'bold'}}>Balance</Text>
              </View>
              <View style={{flex:1, flexDirection:'row',justifyContent:'flex-end',marginRight:30}}>
                <View style={{marginTop:4,}}>
                  <Image source={require('../../../images/rupees.png')} style={{marginRight:5,}}/>
                </View>
                <View>
                <Text style={styles.txtWeight}>255</Text>
                </View>
              </View>
            </View>
         </View>
         <View style={{ borderBottomColor: 'gray',borderBottomWidth: 1,width:320,marginTop:20,marginLeft:40}}></View>
   
         <View style={{marginTop:20,marginLeft:40}}> 
           <Text>Booking for appointment for</Text>
         </View>
         <View style={{marginRight:125,}}> 
           <RadioForm style={{marginTop:20,justifyContent:'space-evenly'}}
             radio_props={data}
             onPress={(value) => {this.setState({value:value})}}
             initial={2}
             formHorizontal={true}
             labelHorizontal={true}
             buttonSize={8}
             buttonColor={'grey'}
             animation ={false}
             selectedButtonColor = {'green'}
             />
         </View>
     
         </ScrollView>
         <View style={{flexDirection:'row',position: 'absolute',bottom:0,}}>
           <View style={{flex:1,}}>
             <TouchableOpacity  onPress={() => this.onMap()}  style={{backgroundColor:'#DBDBDB',height:45,width:'100%',justifyContent:'center',alignItems:'center'}}>
               <Text>Cancel</Text>
             </TouchableOpacity>
           </View>
           <View style={{flex:1,}}>
             <TouchableOpacity style={{backgroundColor:'#EEB149',height:45,width:'100%',justifyContent:'center',alignItems:'center'}}>
               <Text style={{color:'white'}}>Book Now</Text>
             </TouchableOpacity>
           </View>
         </View>
        </SafeAreaView>
      );
    }
  }
  const styles = StyleSheet.create({
   container:{
    flex:1,
   },
   docImage:{
 
    height:90,
    width:90,
    borderRadius:90/2,
    borderWidth: 1.5,
    borderColor: '#A1C46F',
   },
   txtSize:{
     color:'black',
    fontSize:14,
  },
    txtWeight:{
    color:'black',
    fontWeight:'bold',
    fontSize:14
   },
   innerView:{
    padding:13,
    marginTop:10
},
  }); 