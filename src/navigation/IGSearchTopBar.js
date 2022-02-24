import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as InstagramIcons from '../assets/icons/Icons';
import SearchBar from '../searchbar/searchbar';
import * as InstagramButtons from '../components/Buttons/Buttons';

export default function IGReelsTopBar() {
    return(
        <View>
            <View style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <SearchBar />
            </View>
        <View style={{ backgroundColor: '#fff' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  contentContainerStyle={{ display: 'flex', flexDirection: 'row', height: '30' }}>
        {InstagramButtons.DefaultButton('tattoo ideas')}
        {InstagramButtons.DefaultButton('tattoo artist')}
        {InstagramButtons.DefaultButton('junk food')}
        {InstagramButtons.DefaultButton("food photography")}
        {InstagramButtons.DefaultButton('interior design')}
        {InstagramButtons.DefaultButton('fishing trip')}
        {InstagramButtons.DefaultButton('creative makeup')}
        {InstagramButtons.DefaultButton('rolling loud')}
      </ScrollView>
      </View>
        </View>
    )
}