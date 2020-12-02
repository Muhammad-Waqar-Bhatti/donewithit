import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Swipable from 'react-native-gesture-handler/Swipeable';

import AppText from '../components/AppText';
import colors from '../config/colors';


function ListItem({title,subtitle,image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 10,
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