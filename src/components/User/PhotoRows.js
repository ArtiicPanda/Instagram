import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width

function random_hex() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return n.slice(0, 2);
};

export const PhotosRow1 = () => {
    const thirds = (width / 3)

    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,1' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,2' }} />
        </View>
        </>
    )
}

export const PhotosRow2 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Image style={{ width: thirds, height: thirds - 1, margin: 1, marginTop: 0, marginRight: 0   }} source={{ uri: 'https://source.unsplash.com/random/?user,3' }}/>
            <Image style={{ width: thirds, height: thirds - 1, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,4' }} />
            <Image style={{ width: thirds, height: thirds - 1, margin: 1, marginTop: 0, marginLeft: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,5' }} />
        </View>
        </>
    )
}

export const PhotosRow3 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,6' }}/>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,7' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,8' }} />
        </View>
        </>
    )
}

export const PhotosRow4 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,9' }}/>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,10' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,11' }} />
        </View>
        </>
    )
}

export const PhotosRow5 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,12' }}/>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,13' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,14' }} />
        </View>
        </>
    )
}

export const PhotosRow6 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,15' }}/>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,16' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,17' }} />
        </View>
        </>
    )
}

export const PhotosRow7 = () => {
    const thirds = width / 3
    return (
        <>
        <View style={{ backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,18' }}/>
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,19' }} />
            <Image style={{ width: thirds, height: thirds, margin: 1, marginTop: 0 }} source={{ uri: 'https://source.unsplash.com/random/?user,20' }} />
        </View>
        </>
    )
}