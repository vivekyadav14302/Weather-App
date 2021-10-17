import React from 'react';
import {Text} from 'react-native';
import {Header} from 'react-native-elements'
export default function Head(){
  return <Header backgroundColor="green" centerComponent={{text: 'Weather App',  style:{color: 'white', fontSize: 18,letterSpacing: 0.6}}}></Header>
}