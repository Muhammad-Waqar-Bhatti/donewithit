import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {color} from '../config/colors'
 
function ViewImageScreen(props) {
    return (
        <View style={styles.background}>
            <Image 
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")} />
            <View style={styles.closeButton}>
                <MaterialCommunityIcons name="close" color="white" size={30}  />
            </View>
            <View style={styles.deleteButton}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}  />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#012",
        flex:1
    },
    image:{
        width: '100%',
        height:'100%'
    },
    closeButton:{
        position:"absolute",
        top:70,
        left:20,
    },
    deleteButton:{
        position:"absolute",
        top:70,
        right:20,
    },

})
export default ViewImageScreen;