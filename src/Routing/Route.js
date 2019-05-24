import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Components/Login/Login';
import Success from '../Components/Success/Success';

const MyApp = createStackNavigator({
    login: { screen: Login },
    
    Success : {screen: Success},
  },
  {
    initialRouteName: "login"
  })
  
  export default createAppContainer(MyApp)