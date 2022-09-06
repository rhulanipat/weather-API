//import liraries
import React, { Component } from 'react';

import { View,ImageBackground, Text, StyleSheet } from 'react-native';

// create a component
const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}} >Loading</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Loading;
