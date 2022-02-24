import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import * as InstagramComponents from '../Components';
import * as InstagramIcons from '../../assets/icons/Icons';

import PostHeader from './PostHeader';
import PostInteractions from './PostInteractions';

export default function InstagramPost() {
    const width = Dimensions.get('screen').width

    const [liked, setLiked] = useState(true)

    return(
        <>
            <PostHeader />
            <Image style={{ width: width, height: width + 5 }} source={{ uri: 'https://source.unsplash.com/random/?user' }}/>
            <PostInteractions liked={true} setLiked={setLiked} />
        </>
    )
}