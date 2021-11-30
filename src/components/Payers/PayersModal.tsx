import React, {useState} from 'react'
import {Container, Dialog, Grid} from '@mui/material'
import {IKindOfActivity, IPayer, IRegion} from '../../types/dto'
import InputField from '../common/InputField'

type Props = {
    open: boolean
    onClose(): void
    payer: IPayer | null
    regions: IRegion[]
    kindsOfActivity: IKindOfActivity[]
}

const PayersModal: React.FC<Props> = (props) => {
    const [name, setName] = useState(props.payer?.name || '')
    const [surname, setSurname] = useState(props.payer?.surname || '')
    const [secondName, setSecondName] = useState(props.payer?.secondName || '')
    const [passport, setPassport] = useState(props.payer?.passport || '')

    return <Dialog open={props.open} onClose={props.onClose}>
        <Container>
            <Grid container spacing={2} sx={{padding: '25px'}}>
                <Grid item xs={12}>
                    <InputField label={'Имя'} value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <InputField label={'Фамилия'} value={surname} onChange={(e) => setSurname(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <InputField label={'Отчество'} value={secondName} onChange={(e) => setSecondName(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <InputField label={'Паспорт'} value={passport} onChange={(e) => setPassport(e.currentTarget.value)}/>
                </Grid>
            </Grid>
        </Container>
    </Dialog>
}

export default PayersModal