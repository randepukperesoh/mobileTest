import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
//import { getWeather } from './getweather';

export default function CameraScan({setShowCamera ,setWeather}) {
  const [scaned, setScaned] = useState(false)
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const getWeather = async (data, setWeather, setShowCamera) => {
    await fetch(data)
    .then(res => res.json())
    .then(res => setWeather(res))
    .finally(() => setShowCamera(false))
}

  const handleBarCodeScanned = ({ type, data }) => {
    setScaned(true);
    getWeather(data, setWeather, setShowCamera);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scaned ? undefined: handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});