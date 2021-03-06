import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import {AppForm, AppFormField, SubmitButton, AppFormPicker} from '../components/forms';
import Screen from '../components/screen';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})

const categories = [
    {label:"Furniture" , value:1, backgroundColor: colors.primary, icon:"floor-lamp"},
    {label:"Cars" , value:2,backgroundColor: colors.medium, icon:"car"},
    {label:"Cameras" , value:3,backgroundColor: colors.secondary, icon:"camera"},
    {label:"Games" , value:4,backgroundColor: colors.danger, icon:"cards"},
    {label:"Clothing" , value:5,backgroundColor: colors.black, icon:"shoe-heel"},
    {label:"Sports" , value:6,backgroundColor: "orange", icon:"basketball"},
    {label:"Movie & Music" , value:7,backgroundColor: "blue", icon:"headphones"},
    {label:"Books" , value:8,backgroundColor: "violet", icon:"book"},
    {label:"Others" , value:9,backgroundColor: "indigo", icon:"all-inclusive"}
]
function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm 
                initialValues={{title:"", price:"", description:"", category: null}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width={120}/>
                <AppFormPicker items={categories} numberOfColumns={3} name="category" PickerItemComponent={CategoryPickerItem} placeholder="category" width={200} />
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description"/>
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    }
})
export default ListingEditScreen;