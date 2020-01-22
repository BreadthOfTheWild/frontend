import {useState} from 'react';

export const useForm = initialVals => {
    const [values, setValues] = useState(initialVals);

        // console.log('values is ', values);
        // notice [ ] used in return for iterables
    return [
        values, 
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
}