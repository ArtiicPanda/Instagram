import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const Avatar = ({size}) => {
    return (
        <>
            <LinearGradient
                    start={{ x: 0, y: 0 }}
                    colors={[ '#DE0046', '#F7A34B' ]}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 3,
                        borderColor: 'transparent',
                        borderRadius: 5000 }}>
                <Image style={{width: 100, height: 100, ...styles.avatar }} source={{ uri: 'https://source.unsplash.com/random/?user' }}/>
            </LinearGradient>
        </>
    );
};

  
const styles = StyleSheet.create({
    avatar: {
      width: 88,
      height: 88,
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

  export default Avatar;
