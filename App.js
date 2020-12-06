import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert,Button} from 'react-native';
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


const PressHandler = () => {
  console.log("Good Morning");
}

export default function App() {
  return (
    <ListingsScreen />
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
