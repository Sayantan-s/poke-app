import { useState } from 'react';

const useForm = (formState) => {
    const [form, setForm] = useState(formState);

    const onChangeHandler = (eve, callback) => {
        const { name, value } = eve.target;
        if (typeof form === 'object') {
            setForm((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else {
            setForm(value);
        }
        return callback();
    };

    return [form, setForm, onChangeHandler];
};

export default useForm;
