import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button,FlatList, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons} from  '@expo/vector-icons';

import defaultStyles from '../config/style';
import AppText from './AppText';

import PickerItem from './PickerItem';



function AppPicker({icon, items,onSelectItem, selectedItem,numberOfColumns = 1,PickerItemComponent = PickerItem, placeholder,width}) {
    const [modalVisible,setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {icon && <MaterialCommunityIcons 
                         name={icon} 
                         size={20} 
                         color={defaultStyles.colors.medium}
                          style={styles.icon}/>} 
                    {selectedItem ? (<AppText style={styles.text} >{selectedItem.label}</AppText>): (<AppText style={styles.placeholder}>{placeholder}</AppText>) }
                    
                    <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title="close"
                     onPress={() => setModalVisible(false)} />
                <FlatList 
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item}) => 
                        <PickerItemComponent 
                            item={item}
                            label={item.label} 
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item)
                            }}/>}
                />
            </Modal>
        </>
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
    placeholder:{
        color: defaultStyles.colors.medium,
        flex:1,
    },
    text:{
        flex:1
    },
    icon:{
        marginRight:10,
        justifyContent:"center"
    },
    
    
})
export default AppPicker;