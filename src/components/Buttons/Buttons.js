import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as InstagramIcons from '../../assets/icons/Icons';

export const FullWidthButton = (buttonText) => {
    return (
        <>
        <TouchableOpacity View style={{ alignContent: 'center', alignItems: 'center', flex: 1, borderWidth: 0.7, borderColor: '#CBCBCB', borderRadius: 3, marginTop: 10, height: 30, overflow: 'visible' }}>
            <View style={{ flex: 1 }} />
            <Text style={{ fontWeight: 'bold' }}>{ buttonText }</Text>
            <View style={{ flex: 1 }} />
        </TouchableOpacity>
        </>
    )
}

export const DropdownButton = (buttonText) => {
    return (
        <>
        <TouchableOpacity View style={{ backgroundColor: '#d9dbda', alignContent: 'center', alignItems: 'center', borderWidth: 0.7, borderColor: '#CBCBCB', borderRadius: 3, marginTop: 10, height: 30, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>{buttonText + ' '}</Text>
            <View>
                <InstagramIcons.Dropdown />
            </View>
        </TouchableOpacity>
        </>
    )
}

export const DefaultButton = (buttonText) => {
    return (
        <>
        
        <TouchableOpacity View style={{ backgroundColor: '#d9dbda', alignContent: 'center', alignItems: 'center', borderWidth: 0.7, borderColor: '#CBCBCB', marginTop: 10, height: 30, display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>{buttonText}</Text>
        </TouchableOpacity>
        </>
    )
}

export const TextLink = ({text, link}) => {
    return (
        <TouchableOpacity>
            <Text style={{ color: '#004C8B'}}>{text}</Text>
        </TouchableOpacity>
    )
}

export const Hashtag = ({text}) => {
    return (
            <Text style={{ color: '#004C8B'}}>{text}</Text>
    )
}