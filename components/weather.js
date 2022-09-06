//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import Loading from './loading';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import img from '../assets/img.jpg'


// create a component
const Weather = () => {

    const [loading, setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState()
    const [city, setCity] = useState('')

    const api_key = '561e8337c51e59ec1ee8cd890451722a'

    const fetchData = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "pretoria" + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }

    const searchByCity = () => {
        console.log(city)
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))

    }
    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={img}
            resizeMode = "cover"
            >
                
            {loading ? <Loading />
                :
                <div>
                    <View style={styles.search_view}>
                        <TextInput style={styles.search_bar} placeholder='Search city..' onChangeText={(e) => setCity(e)} />
                        <Ionicons style={styles.search_icon} name="search" size={30} onPress={() => searchByCity()} />
                    </View>

                 
                    <View style={styles.display_img}>
                        <Image style={styles.display_icon} source={{ uri: "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png" }} />
                        <Text style={styles.temp_D}>
                            {(currentWeather.main.temp - 279.15).toFixed(2)} <span style={{ color: "#F4DC8C" }}>c</span>
                        </Text>
                        <Text style={{ color: 'grey', fontSize: 10, marginLeft: 70 }}>
                            {currentWeather.weather[0].description}
                        </Text>
                    </View>
                   

                    <View style={styles.location_Container}>
                        <Entypo name="location-pin" size={20} color="#F4DC8C" />
                        <Text style={{ color: 'white', fontSize: 13 }}>{currentWeather.name}</Text>

                    </View>

                    <View style={styles.location_ContainerB}>
                        <Text style={styles.weatherFomat}>Humidity </Text>
                        <Text style={{ color: 'white', fontSize: 13 }}><span> </span>{currentWeather.main.humidity}<span>%</span></Text>
                        <Text style={styles.inline}>Pressure </Text>
                        <Text style={{ color: 'white', fontSize: 13 }}><span> </span>{currentWeather.main.pressure} <span>hPa</span></Text>
                    </View>

                    <View style={styles.location_ContainerC}>
                        <Text style={styles.inline}>Wind speed </Text>
                        <Text style={{ color: 'white', fontSize: 13 }}><span> </span>{currentWeather.wind.speed}<span> Mph</span></Text>
                        <Text style={styles.inline}>Wind gust </Text>
                        <Text style={{ color: 'white', fontSize: 13 }}><span> </span>{currentWeather.wind.gust}<span> Knots</span></Text>
                    </View>



                    <View stlye={styles.dateContainer}>

                        <Text style={styles.dateFormat}>
                            Today
                        </Text>

                        <Text style={styles.dateFormat}>
                            {new Date().toDateString()}
                        </Text>

                    </View>

                </div>
            }
        </ImageBackground>
        </View >

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    search_view: {

        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    search_bar: {
        height: 40,
        width: "80%",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'orange',
        marginBottom: 315,
        // marginLeft: 20,
    },
    search_icon: {
        marginRight: 10,
    },
    location_Container: {
        
        flexDirection: 'row',
        position: 'absolute',
        bottom: 510,
        marginLeft: '15%',

    },
    location_ContainerB: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 150,
        marginLeft: '15%',
        fontWeight: 'bold',
    },
    location_ContainerC: {
        
        flexDirection: 'column',
        position: 'absolute',
        bottom: 150,
        marginLeft: '50%',
        fontWeight: 'bold',

    },
    inline: {
        marginRight: 0,
         color: 'black',
        fontWeight: 'bold',
    },
    display_img: {
        display: 'flex',
        flexDirection: 'column',
        bottom: 220,
        marginLeft: '20%'

    },
    display_icon: {
        width: "200px",
        height: "200px",

    },
    temp_D: {
        color: "white",
        fontSize: 50,
        marginLeft: '20%'
    },
    dateContainer: {
        flexDirection: 'row',

    },
    dateFormat: {
        color: 'white',
        fontSize: 13,
        marginLeft: 25,
        fontWeight: 'bold',
    },

    weatherFomat: {
         color: 'black',
        fontSize: 13,
        marginLeft: 0,
        fontWeight: 'bold',
    },
    subIcon: {

    }, 
    cardView:{
        
        padding:20,
        marginBottom:10,
        margin:10, 
        borderRadius:12,
        shadowColor:'#000',
        shadowOffset:{width:0, height:10,},
        backgroundColor:'rgb(255,255,255,9)',
        shadowOpacity:5,
        shadowRadius:20,
        height:20,
      },
});

//make this component available to the app
export default Weather;
