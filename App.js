import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert,Button} from 'react-native';
import AppButton from './app/components/AppButton';

import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';

const PressHandler = () => {
  console.log("Good Morning");
}

export default function App() {
  return (
    <ListingDetailsScreen />
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
