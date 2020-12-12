import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert,Button, TextInput} from 'react-native';
import AppButton from './app/components/AppButton';

import AppText from './app/components/AppText';
import Card from './app/components/Card';
import MessageScreen from './app/screen/MessageScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import Screen from './app/components/screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screen/AccountScreen';
import ListingsScreen from './app/screen/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screen/LoginScreen';



export default function App() {
  
  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center",
  },
  
});
