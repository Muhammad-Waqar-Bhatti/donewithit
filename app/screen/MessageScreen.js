import React ,{useReducer, useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/screen';

const initialMessages = [ 
    {
        id: 1,
        title: 'Mosh Hamadani',
        description: 'Hey whatsup dude ',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Mosh Hamadani',
        description: 'Hey buddy comming to part?',
        image: require('../assets/mosh.jpg')
    }
];

function MessageScreen(props) {
    const[messages,setMassages] = useState(initialMessages);
    const[refreshing,setRefreshing] = useState(false);
    const handleDelete = message => {
        setMassages(messages.filter(m=> m.id !== message.id));
    };

    return (
        <Screen>
        <FlatList 
            data={messages}
            keyExtractor={(message)=> message.id.toString()}
            renderItem={({item}) => 
                <ListItem 
                title={item.title}
                subtitle={item.description}
                image={item.image} 
                onPress={() => console.log("Hey Item is Selected "+ item.id) }
                renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/> }/>}
            ItemSeparatorComponent={ ListItemSeparator }
            refreshing={refreshing}
            onRefresh={()=>{
                setMassages([{
                    id: 2,
                    title: 'Mosh Hamadani',
                    description: 'Hey buddy comming to part?',
                    image: require('../assets/mosh.jpg')
                }])
            }}
        />
        </Screen>
        
    );
}



export default MessageScreen;