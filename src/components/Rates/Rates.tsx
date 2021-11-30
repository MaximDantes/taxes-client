import React from 'react'
import {ITax} from '../../types/dto'
import {
    IconButton,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentTaxSelector} from '../../selectors/taxes-selectors'
import {setCurrentTax} from '../../store/taxes/thunks'
import {getTaxRatesSelector} from '../../selectors/tax-rates-selectors'
import {getRegionsSelector} from '../../selectors/regions-selectors'
import {Add} from '@mui/icons-material'

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

    const isSingleTax = !(taxRates.length === 1 && !taxRates[0].regionId)

    return <>
        <Select value={currentTax?.id || ''} onChange={onSelectChange}>
            {props.taxes.map(item => (
                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            ))}
        </Select>

        {isSingleTax &&
            <IconButton>
                <Add/>
            </IconButton>
        }

        {isSingleTax
            ?
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
            :
            <>
                <TextField value={taxRates[0].value}/>
            </>
        }
    </>
}

export default Rates