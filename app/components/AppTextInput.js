import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from  '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import defaultStyles from '../config/style';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
           {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>} 
            <TextInput style={defaultStyles.text} {...otherProps} ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: "center",
        width: '100%',
        padding:15,
        marginVertical: 10,
    },
    icon:{
        marginRight:10,
        justifyContent:"center"
    },
    
})
export default AppTextInput;