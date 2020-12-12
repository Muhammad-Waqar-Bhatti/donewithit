import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import {Formik} from 'formik';

import Screen from '../components/screen';

function LoginScreen(props) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <Formik 
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleSubmit})=> (
                    <>
                     <AppTextInput 
                        autoCapitalize='none'
                        autoCorrect ={false}
                        icon="email"
                        keyboardType="email-address"
                        onChangeText ={handleChange("email")}
                        placeholder="Email"
                        textContentType="emailAddress"
                     />
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        onChangeText={handleChange("password")}
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <AppButton style={styles.button} title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
           
        </Screen>
    );
}

const styles = StyleSheet.create({
    button:{
        marginTop:12
    },
    container:{
        padding:10
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})

export default LoginScreen;