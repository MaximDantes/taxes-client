import React from 'react'
import {FormControl, InputLabel, TextField} from '@mui/material'

type TProps = {
    label: string
    value: string | number
    type?: 'input' | 'number'
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const CustomInput: React.FC<TProps> = (props) => {
    return <FormControl fullWidth>
        <TextField value={props.value}
                   onChange={props.onChange}
                   variant={'outlined'}
                   label={props.label}
        />
    </FormControl>
}

export default CustomInput