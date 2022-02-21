import React from 'react';
import { View } from 'react-native';
import * as InstagramIcons from '../assets/icons/Icons';

export default function IGFeedTopBar() {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15, }}>
            <InstagramIcons.IGLogo />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <InstagramIcons.Add />
            <View style={{ flex: 1 }} />
            <InstagramIcons.Heart />
            <View style={{ flex: 1 }} />
            <InstagramIcons.Messenger />
        </View>
    )
}