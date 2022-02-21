import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IGPrimaryNavigation from './src/navigation/IGPrimaryNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <IGPrimaryNavigation />
  );
}