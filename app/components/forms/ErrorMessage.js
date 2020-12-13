import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

function ErrorMessage({visible,error}) {
    if(!visible || !error) return null;
    return (
        <AppText style={styles.errorText}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    errorText:{
        color: "red"
    }
})
export default ErrorMessage;