import * as React from 'react';
import { IGFeedTopBar, IGNaviBar } from './Screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import *  as InstagramComponents from '../components/Components';

export default function ProfileScreen() {
  return (
    <>
      <ScrollView>
        <InstagramComponents.Userdata />
        <InstagramComponents.ProfileInfo />
        <InstagramComponents.ProfilePhotos />
      </ScrollView>
    </>
  );
}