import React from 'react';
import { View, Text } from 'react-native';
import * as InstagramComponents from '../Components';

export default function ProfileInfo() {
    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', padding: 15 }}>
            <Text style={{ fontWeight: 'bold', paddingBottom: 5 }}>Username</Text>
            <Text style={{ paddingBottom: 5 }}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt { InstagramComponents.InstagramButtons.Hashtag({ text: '#hashtag' }) }</Text>
            </Text>
            {InstagramComponents.InstagramButtons.TextLink({ text: 'Link goes here', link: ''})}
            {InstagramComponents.InstagramButtons.FullWidthButton('Edit Profile') }
            <View style={{ flex: 1 }} />
        </View>
    )
}
