import React from 'react';
import { View, Text } from 'react-native';
import * as InstagramIcons from '../assets/icons/Icons';

export default function IGReelsTopBar() {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reels </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <InstagramIcons.Burger />
        </View>
    )
}