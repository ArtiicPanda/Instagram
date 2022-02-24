import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import * as InstagramComponents from '../Components';
import * as InstagramIcons from '../../assets/icons/Icons';
import *  as InstagramPhotoRows from './PhotoRows';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function ProfileTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Tagged" component={Tagged} />
    </Tab.Navigator>
  );
}

function Posts() {
    return (
        <>
            <InstagramPhotoRows.PhotosRow1 />
            <InstagramPhotoRows.PhotosRow2 />
            <InstagramPhotoRows.PhotosRow3 />
            <InstagramPhotoRows.PhotosRow4 />
            <InstagramPhotoRows.PhotosRow5 />
            <InstagramPhotoRows.PhotosRow6 />
            <InstagramPhotoRows.PhotosRow7 />
        </>
    )
}

function Tagged() {
    return (
        <>
        </>
    )
}

const width = Dimensions.get('screen').width

export default function ProfilePhotos() {
    return(
        <View>
        {/* <View style={{ backgroundColor: '#fff', display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-around', padding: 15 }}>
            <View>
                <InstagramIcons.Grid />
            </View>
            <View>
                <InstagramIcons.Tagged />
            </View>
    </View> */}
        <ProfileTabs />
        
        </View>
    )
}