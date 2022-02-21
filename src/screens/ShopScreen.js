import * as React from 'react';;
import { SafeAreaView } from 'react-native-safe-area-context';
import { IGFeedTopBar } from './Screens';
import { ScrollView, View } from 'react-native';
import SearchBar from '../searchbar/searchbar';
import * as InstagramButtons from '../navigation/Buttons/Buttons';

export default function ShopScreen() {
  return (
    <>
      <ScrollView>
      <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <SearchBar />
      </View>
      <View style={{backgroundColor: '#fff'}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  contentContainerStyle={{ display: 'flex', flexDirection: 'row' }}>
        {InstagramButtons.DropdownButton('Categories')}
        {InstagramButtons.DefaultButton('Shops')}
        {InstagramButtons.DefaultButton('Drops')}
        {InstagramButtons.DefaultButton('Live')}
        {InstagramButtons.DefaultButton("Editors' Picks")}
        {InstagramButtons.DefaultButton('Buy on Instagram')}

      </ScrollView>
      </View>
      </ScrollView>
    </>
  );
}