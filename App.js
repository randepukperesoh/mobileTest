import { Button, StyleSheet, Text, View } from 'react-native';
import CameraScan from './components/CameraScan/CameraScan';
import { WeatherList } from './components/WeatherList/WeatherList';
import { useState } from 'react';

export default function App() {
  const [showCamera, setShowCamera] = useState(false);
  const [ weather, setWeather ] = useState(false);

  if (showCamera) { 
    return <CameraScan setShowCamera={setShowCamera} setWeather={setWeather}/>
  } 
  if (weather) {
    return(
     <WeatherList setShowCamera={setShowCamera} data={weather}/> 
    )
  }
  else{
    return (
      <View style={styles.container}>
        <Button onPress={() => setShowCamera(true)} title='Сканировать QR'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'blue',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
