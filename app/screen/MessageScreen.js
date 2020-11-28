import React from 'react';
import { FlatList, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

const message = [ 
    {
        id: 1,
        title: 'Mosh Hamadani',
        description: 'Hey whatsup dude',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Mosh Hamadani',
        description: 'Hey buddy comming to part?',
        image: require('../assets/mosh.jpg')
    }
]
function MessageScreen(props) {
    return (
        <FlatList 
            data={message}
            keyExtractor={(message)=> message.id.toString()}
            renderItem={({item}) => <ListItem title={item.title} subtitle={item.description} image={item.image}/>}
        />
        
        
    );
}

export default MessageScreen;