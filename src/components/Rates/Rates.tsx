import React, {useState} from 'react'
import {ITax} from '../../types/dto'
import {
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Table, TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentTaxSelector} from '../../selectors/taxes-selectors'
import {setCurrentTax} from '../../store/taxes/thunks'
import {getTaxRatesSelector} from '../../selectors/tax-rates-selectors'
import {getRegionsSelector} from '../../selectors/regions-selectors'

type Props = {
    taxes: ITax[]
}

const Rates: React.FC<Props> = (props) => {
    const dispatch = useDispatch()

    const currentTax = useSelector(getCurrentTaxSelector)
    const taxRates = useSelector(getTaxRatesSelector)
    const regions = useSelector(getRegionsSelector)
    console.log(regions)
    console.log(taxRates)

    const onSelectChange = (e: SelectChangeEvent) => {
        dispatch(setCurrentTax(e.target.value))
    }

    return <>
        <Select value={currentTax?.id || ''} onChange={onSelectChange}>
            {props.taxes.map(item => (
                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            ))}
        </Select>

        {(taxRates.length === 1 && !taxRates[0].regionId)
            ?
            <>
                <TextField value={taxRates[0].value}/>
            </>
            :
            <>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Регион</TableCell>
                                <TableCell>Ставка</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {taxRates.map(item => (
                                <TableRow key={item.id}>
                                    <TableCell>{regions.find(region => region.id === item.regionId)?.title}</TableCell>
                                    <TableCell>{item.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        }
    </>
}

export default Rates