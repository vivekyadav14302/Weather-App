import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from "@expo/vector-icons";
import {Button} from 'react-native-elements';
import Card from './card';

export default function Search(){

  const [text, setText] = useState("");
  const [city, setCity] = useState("");
  const styles = StyleSheet.create({
    inttxt:{
      backgroundColor: "white",
      borderTopColor: 'blue',
      borderWidth: 2,
      borderBottomColor: 'red',
      marginTop: 70,
      height: 50,
      borderRadius: 9,
      padding: 10,
      fontSize: 15,
      color: 'black',
      letterSpacing: 0.4,
      marginBottom: 30,
    }
  })

  function setChange(e){
    setText(e.target.value);
  }
  function setFinal(){
    setCity(text)
  }
  return(                                
   <View style={{margin: 10}}>
  <TextInput onChange={setChange} style={styles.inttxt} placeholder={'Enter City Name . . .'}></TextInput>
  <Button onPress={setFinal} icon={<Feather name="search" color='white' size={22} />}></Button>
  <Card title={city}></Card>
  </View>)
}
