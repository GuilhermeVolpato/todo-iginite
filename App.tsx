import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/pages/index';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Home/>
    </View>
  );
}

