import React from 'react';
import { View, Text } from 'react-native';
import * as InstagramIcons from '../assets/icons/Icons';

export default function IGNaviBar() {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>username </Text>
            <View>
                <View style={{ flex: 1 }} />
                <InstagramIcons.Dropdown />
                <View style={{ flex: 1 }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }} />

            <View>
                <View style={{ flex: 1 }} />
                    <InstagramIcons.Add />
                <View style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1 }} />

            <View>
                <View style={{ flex: 1 }} />
                    <InstagramIcons.Burger />
                <View style={{ flex: 1 }} />
            </View>
        </View>
        
    )
}