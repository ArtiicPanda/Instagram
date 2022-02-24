import * as React from 'react';
import { Text, View} from 'react-native';
import { IGFeedTopBar } from './Screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InstagramPost } from '../components/Components';
import { ScrollView } from 'react-native';

export default function FeedScreen() {
  return (
    <>
      <ScrollView>
        <InstagramPost />
      </ScrollView>
    </>
  );
}