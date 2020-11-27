import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={3}
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>    
                <Image style={styles.logoImage} source={require('../assets/logo-red.png')} />
                <Text style={styles.logoTagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="login" />
                <AppButton style={styles.register}title="Register" color="secondary"/>
            </View>
            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonContainer:{
        width:'100%',
        paddingHorizontal:10,
    },
    logoContainer:{
        height:100,
        position:"absolute",
        top: 100,
    },
    logoImage:{
        width:70,
        height:70,
        alignSelf:"center"
    },
    logoTagline:{
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    register:{
        marginVertical:10,
    }
})

export default WelcomeScreen;