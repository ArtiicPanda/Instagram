import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as InstagramIcons from '../../assets/icons/Icons';

export const FullWidthButton = (buttonText) => {
    return (
        <>
        <TouchableOpacity View style={{ alignContent: 'center', alignItems: 'center', flex: 1, borderWidth: 0.7, borderColor: '#CBCBCB', borderRadius: 3, padding: 10, margin: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Button</Text>
        </TouchableOpacity>
        </>
    )
}

export const DropdownButton = (buttonText) => {
    return (
        <>
        <TouchableOpacity View style={{ backgroundColor: '#d9dbda', alignContent: 'center', alignItems: 'center', borderWidth: 0.7, borderColor: '#CBCBCB', borderRadius: 3, padding: 10, margin: 10, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>{buttonText + ' '}</Text>
            <View>
                <View style={{ flex: 1 }} />
                <InstagramIcons.Dropdown />
                <View style={{ flex: 1 }} />
            </View>
        </TouchableOpacity>
        </>
    )
}

export const DefaultButton = (buttonText) => {
    return (
        <>
        
        <TouchableOpacity View style={{ backgroundColor: '#d9dbda', alignContent: 'center', alignItems: 'center', borderWidth: 0.7, borderColor: '#CBCBCB', borderRadius: 3, padding: 10, margin: 10, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>{buttonText}</Text>
        </TouchableOpacity>
        </>
    )
}