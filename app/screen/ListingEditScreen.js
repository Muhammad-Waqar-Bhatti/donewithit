import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton, AppFormPicker} from '../components/forms';
import Screen from '../components/screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})

const categories = [
    {label:"Furniture" , value:1},
    {label:"Electronics" , value:2},
    {label:"Kitchen" , value:3},
    {label:"Garden" , value:4}
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
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price"/>
                <AppFormPicker items={categories} name="category" placeholder="category" />
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