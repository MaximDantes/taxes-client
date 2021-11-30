import React from 'react'
import {FormControl, Input, InputLabel, Select, SelectChangeEvent} from '@mui/material'

type TProps = {
    label: string
    value: string
    onChange(e: SelectChangeEvent): void
}

const CustomSelect: React.FC<TProps> = (props) => {
    return <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select value={props.value}
                variant={'outlined'}
                onChange={props.onChange}
                label={props.label}
        >
            {props.children}
        </Select>
    </FormControl>
}

export default CustomSelect