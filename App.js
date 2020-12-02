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


const PressHandler = () => {
  console.log("Good Morning");
}

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white"></Icon>
    </Screen>
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
