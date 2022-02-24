import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as InstagramComponents from '../Components';
import * as InstagramIcons from '../../assets/icons/Icons';

export default function PostHeader() {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5, alignContent:'center', alignItems: 'center' }}>
            <>
                <>
                    <Image style={{ ...styles.avatar }} source={{ uri: 'https://source.unsplash.com/random/?user' }}/>
                    <Text style={{ fontWeight: 'bold', paddingHorizontal: 5 }}>Username</Text>
                </>
                <InstagramComponents.Spacer />
            <InstagramIcons.More />
                
            </>


        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 100 / 2,
      backgroundColor: 'white',
      borderWidth: 3,
      borderColor: 'white',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
  });