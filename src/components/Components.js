import * as React from 'react';
import { View } from 'react-native';
import Userdata from "./User/Userdata";
import Avatar from "./User/Avatar";
import ProfileInfo from "./User/ProfileInfo";
import ProfilePhotos from './User/ProfilePhotos';
import * as InstagramButtons from './Buttons/Buttons';
import PostHeader from './Posts/PostHeader';
import InstagramPost from './Posts/Post';
import * as InstagramExplore from './Explore/ExploreRow';

const Spacer = () => {
    return (
        <>
            <View style={{ flex: 1 }} />
        </>
    )
}

export { Userdata, Avatar, ProfileInfo, ProfilePhotos, InstagramButtons, Spacer }
export { PostHeader, InstagramPost }
export { InstagramExplore }
