import React from 'react';
import { Image,View,Text,StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        
        <View style={styles.background}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsConatiner}>
                <AppText style={styles.title}>Red Jacket For sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/mosh.jpg')} title="Mosh" subtitle="5 Listings"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#f8f4f4", 
        flex:1
    },
    image:{
        width: '100%',
        height: 300,
    },
    detailsConatiner:{
        padding: 10,
    },
    price:{
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical:10,
    },
    title:{
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer:{
        marginVertical:30,
    }

})
export default ListingDetailsScreen;