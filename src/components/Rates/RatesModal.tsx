import React from 'react'
import {Dialog, Grid} from '@mui/material'
import {ITaxRate} from '../../types/dto'

type Props = {
    open: boolean
    onClose(): void
    rate?: ITaxRate
}

const RatesModal: React.FC<Props> = (props) => {

    return <Dialog open={props.open} onClose={props.onClose}>
        <Grid container sx={{padding: '25px'}}>
            <Grid item xs={12}>
                {/*<CustomInput label={'Ставка'} value={} onChange={}/>*/}
            </Grid>
        </Grid>
    </Dialog>
}

export default RatesModal