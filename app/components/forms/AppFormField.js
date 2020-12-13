import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
        <AppTextInput 
            onChangeText ={handleChange(name)}
            OnBlur = {() => setFieldTouched(name)}
            {...otherProps}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    );
}

export default AppFormField;