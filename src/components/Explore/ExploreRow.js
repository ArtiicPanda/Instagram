import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width

export const ExploreRow1 = () => {
    const thirds = (width / 3)

    return (
        <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,0' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,1' }} />
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,3' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,6' }} />
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column' }}>
            <Image style={{ width: thirds , height: (thirds * 2) + 1, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,' }} />
        </View>
        </View>
        </>
    )
}

export const ExploreRow2 = () => {
    const thirds = (width / 3)

    return (
        <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column' }}>
            <Image style={{ width: thirds , height: (thirds * 2) + 1, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,99' }} />
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,76' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user45' }} />
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,33' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,63' }} />
        </View>
        </View>
        </>
    )
}

export const ExploreRow3 = () => {
    const thirds = (width / 3)

    return (
        <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,10' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,14' }} />
        </View>            
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,90' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,18' }} />
        </View>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,23' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,64' }} />
        </View>
        </View>
        </>
    )
}