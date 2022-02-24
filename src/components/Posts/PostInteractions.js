import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as InstagramComponents from '../Components';
import * as InstagramIcons from '../../assets/icons/Icons';

export default function PostInteractions(props) {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <>
                <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 100 }}>
                    <InstagramIcons.Heart />
                    <InstagramIcons.Comment />
                    <InstagramIcons.Share />
                </View>
                <InstagramComponents.Spacer />
                <>
                    <InstagramIcons.Bookmark />
                </>
            </>


        </View>
    )
}