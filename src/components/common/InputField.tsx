import React from 'react'
import {FormControl, Input, InputLabel} from '@mui/material'

type TProps = {
    label: string
    value: string | number
    type?: 'input' | 'number'
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const InputField: React.FC<TProps> = (props) => {
    return <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Input value={props.value}
               onChange={props.onChange}
        />
    </FormControl>
}

export default InputField