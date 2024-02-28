import { ScrollView, Button, Image, StyleSheet, Text, View } from 'react-native';

export const WeatherList = ({setShowCamera, data}) => {
    return(
        <View style={styles.weatherList}>
            <Image style={styles.logo} source={{ uri: 'https:' + data.current.condition.icon }}/>
            <Text style={styles.text}>Город: {data.location.name}</Text>
            <Text style={styles.text}>Дата: {data.location.localtime.split(' ')[0]}</Text>
            <Text style={styles.text}>Температура воздуха: {data.current.temp_c}°C</Text>
            <Text style={styles.text}>Ощущается как: {data.current.feelslike_c}°C</Text>
            <Text style={styles.text}>Влажность: {data.current.humidity}%</Text>
            
            <ScrollView horizontal={true} style={styles.scrollView}>
                {data.forecast.forecastday[0].hour.map((hour) => (
                    <View style={styles.slide} key={hour.time_epoch}>
                        <Text style={styles.hourText}>Время: {hour.time.split(' ')[1]}</Text>
                        <View style={styles.hourIconContainer}>
                            <Image style={styles.hourIcon} source={{ uri: 'https:' + hour.condition.icon }}/>
                        </View>
                        <Text style={styles.text}>Температура: {hour.temp_c}°C</Text>
                        <Text style={styles.text}>Влажность: {hour.humidity}%</Text>
                        <Text style={styles.text}>Скорость ветра: {hour.wind_kph}</Text>
                        <Text style={styles.text}>Шансы осадков: {hour.chance_of_rain}%</Text>
                    </View>
                ))}
            </ScrollView>
            
            <Button onPress={() => setShowCamera(true)} title='Сканировать новый qr'/>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherList: {
        flex: 1,
        backgroundColor: '#E3A74E',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        marginBottom: 10
    },
    scrollView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        maxHeight: 300 
    },
    slide: {
        width: 180,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    hourText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    hourIconContainer: {
        alignItems: 'center'
    },
    hourIcon: {
        width: 80,  
        height: 80, 
        marginBottom: 5
    }
});
