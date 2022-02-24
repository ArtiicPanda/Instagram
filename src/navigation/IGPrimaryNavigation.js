import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as InstagramScreens from '../screens/Screens';
import * as InstagramIcons from '../assets/icons/Icons';
import { SafeAreaView, StatusBar, Image } from 'react-native';

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
            <InstagramIcons.HomeIcon fill={ focused ? 'black' : 'white' } />
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
            <InstagramIcons.SearchIcon strokeWidth={ focused ? '2' : '1' } />
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
            <Image style={{ width: 30,
              height: 30,
              borderRadius: 100 / 2,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: focused ? 'black' : 'white',
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10, }} source={{ uri: 'https://source.unsplash.com/random/?user' }}/>

            
          );
        },
      }} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}