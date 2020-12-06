import React from 'react';
import { View,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';

import Icon from '../components/Icon';
import Screen from '../components/screen';
import colors from '../config/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon:{
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon:{
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    image={require('../assets/mosh.jpg')}
                    title='Mosh' 
                    subtitle='moshhamadani@gmail.com'/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            } />}
                />
            </View>
            <View style={styles.container}>
                <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}/>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        backgroundColor: 'white'
    },
    screen:{
        backgroundColor: colors.lightGray,
    }
})
export default AccountScreen;