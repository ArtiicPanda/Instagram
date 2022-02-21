import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as InstagramScreens from '../screens/Screens';
import * as InstagramIcons from '../assets/icons/Icons';
import { SafeAreaView, StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function IGPrimaryNavigation() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <NavigationContainer>
    <Tab.Navigator tabBarOptions={{ showLabel: false, style: {} }}>
    <Tab.Screen name="Home" component={InstagramScreens.FeedScreen}
      options={{
        header: InstagramScreens.IGFeedTopBar,
        navigationOptions: {
          headerForceInset: { vertical: 'never' },
        },
        tabBarIcon: ({focused,color}) => {
          return (
            <InstagramIcons.HomeIcon />
          );
        },
      }} />
    <Tab.Screen name="Search" component={InstagramScreens.SearchScreen}
      options={{
        header: InstagramScreens.IGSearchTopBar,
        navigationOptions: {
          headerForceInset: { vertical: 'never' },
        },
        tabBarIcon: ({focused,color}) => {
          return (
            <InstagramIcons.SearchIcon />
          );
        },
      }} />
    <Tab.Screen name="Reels" component={InstagramScreens.ReelsScreen}
      options={{
        header: InstagramScreens.IGReelsTopBar,
        navigationOptions: {
          headerForceInset: { vertical: 'never' },
        },
        tabBarIcon: ({focused,color}) => {
          return (
            <InstagramIcons.ReelsIcon />
          );
        },
      }} />
    <Tab.Screen name="Shop" component={InstagramScreens.ShopScreen}
      options={{
        header: InstagramScreens.IGShopTopBar,
        navigationOptions: {
          headerForceInset: { vertical: 'never' },
        },
        tabBarIcon: ({focused,color}) => {
          return (
            <InstagramIcons.ShopIocn />
          );
        },
      }} />
    <Tab.Screen name="Avatar" component={InstagramScreens.ProfileScreen}
      options={{
        header: InstagramScreens.IGNaviBar,
        navigationOptions: {
          headerForceInset: { vertical: 'never' },
        },
        tabBarIcon: ({focused,color}) => {
          return (
            <InstagramIcons.AvatarIcon />
          );
        },
      }} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}