import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from '../components/AppText';
import colors from '../config/colors';


function ListItem({title,subtitle,image,IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsConatiner}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={30} color={colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 10,
        alignItems:"center"
    },
    detailsConatiner:{
        marginLeft:6,
        justifyContent:"center",
        flex:1,
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginRight: 10,
    },
    title:{
        fontWeight: "500",
    },
    subtitle:{
        color: colors.medium,
    }
})

export default ListItem;