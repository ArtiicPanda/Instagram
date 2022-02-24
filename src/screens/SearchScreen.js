import * as React from 'react';
import *  as InstagramPhotoRows from '../components/User/PhotoRows';
import { InstagramExplore } from '../components/Components';

import { ScrollView } from 'react-native';

export default function SearchScreen() {
  return (
    <>
    <ScrollView>
      <InstagramExplore.ExploreRow1 />
      <InstagramExplore.ExploreRow3 />
      <InstagramExplore.ExploreRow2 />
    </ScrollView>
    </>
  );
}