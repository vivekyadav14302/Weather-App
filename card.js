import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import axios from 'axios';

export default function Card(props){
  const city = props.title
  const [main, setMain] = useState([])
  const [weather, setWheather] = useState([])
  const [wind, setWind] = useState([])
  const [name, setName] = useState('')
  const icon_path = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  useEffect(()=>{axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`)
  
  .then((abcd)=>{console.log(abcd.data)
  
  setMain(abcd.data.main)
  setWheather(abcd.data.weather[0])
  setWind(abcd.data.wind)
  setName(abcd.data.name)
  
  
  })},[city])

 const comstyle = StyleSheet.create({
   divstyle:{
     backgroundColor: 'navy',
     borderRadius: 6,
     marginTop: 20,
     borderTopColor: 'red',
     borderTopWidth: 5,
     borderBottomColor: 'green',
     borderBottomWidth: 5,
     padding: 15,
   },
   minstyle:{
     color: 'white',
     fontWeight: 'bold',
     letterSpacing:0.7,
     fontSize: 15, 
   },
   maxstyle:{
     color: 'white',
     fontWeight: 'bold',
     letterSpacing:0.7,
     marginLeft: 40,
     fontSize: 15, 
     
   }
 })
  return (
  <View style={comstyle.divstyle}>
  <View style={{display:'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
  <Text style={comstyle.minstyle}>{'Min = ' + main.temp_min} &#8451;</Text>
  <Text style={comstyle.maxstyle}>{'Max = ' + main.temp_max} &#8451;</Text>
  </View>
  <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 16, letterSpacing:0.7, textAlign: 'center', marginTop: 15}}>{'Weather = ' + weather.main}</Text>
  <Text style={{color: 'pink', fontWeight: 'bold', fontSize: 16, letterSpacing:0.7, textAlign: 'right', marginTop: 20}}>{'Wind = ' + wind.speed}</Text>
  <View style={{alignItems: 'center', marginRight: 10}}>
  <Image source={icon_path} style={{width: 70, height: 50,}}></Image>
  <Text style={{color: 'yellow', fontWeight: 'bold', fontSize: 16, letterSpacing:0.7, textAlign: 'right', marginTop: 20}}>{'Temp = ' + main.temp} &#8451;</Text>
  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, letterSpacing:0.7, textAlign: 'right', marginTop: 20}}>{'Feel Like = ' + main.feels_like} &#8451;</Text>
  </View>
  </View>
  )
}

