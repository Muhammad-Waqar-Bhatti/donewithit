import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

function screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View style={[styles.subContainer,style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop : Constants.statusBarHeight ,
        flex:1
    },
    subContainer:{
        flex:1,
    }
    
})
export default screen;