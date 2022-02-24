import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Avatar from './Avatar';

export default function Userdata() {
    const username = 'username'
    const posts = 2040
    const followers  = 98403
    const following = 213

    return(
        <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 15, paddingBottom: 0, paddingTop: 10 }}>
            <Avatar />

            <View style={{ flex: 1 }} />

            <View style={{ alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    { posts.toLocaleString() }
                </Text>
                <Text style={{ fontSize: 13 }}>
                    Posts
                </Text>
                <View style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    { followers.toLocaleString() }
                </Text>
                <Text style={{ fontSize: 13 }}>
                    Followers
                </Text>
                <View style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1 }} />

            <View style={{ alignItems: 'center' }}>
                <View style={{ flex: 1 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    { following.toLocaleString() }
                </Text>
                <Text style={{ fontSize: 13 }}>
                    Following
                </Text>
                <View style={{ flex: 1 }} />
            </View>

            <View style={{ flex: 1 }} />

        </View>
    )
}