import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/screen';
import colors from '../config/colors';

const listings = [
    {
        id:1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id:2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg'),
    },
    {
        id:3,
        title: 'Amazing comfortable chair',
        price: 500,
        image: require('../assets/chair.jpg'),
    }
];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={ listings => listings.id.toString()}
                renderItem={({item}) => 
                    <Card title={item.title} subtitle={"$"+item.price} image={item.image}/>}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.lightGray,
        paddingHorizontal: 10,
        paddingVertical:10
    }
})

export default ListingsScreen;