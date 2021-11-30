import React, {useEffect, useState} from 'react'
import {Button, Container, Dialog, Grid, MenuItem} from '@mui/material'
import {IKindOfActivity, IPayer, IPayerWithoutId, IRegion} from '../../types/dto'
import CustomInput from '../common/CustomInput'
import CustomSelect from '../common/CustomSelect'

type Props = {
    open: boolean
    onClose(): void
    regions: IRegion[]
    kindsOfActivity: IKindOfActivity[]
    add(payer: IPayerWithoutId): void
}

const PayersModal: React.FC<Props> = (props) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [secondName, setSecondName] = useState('')
    const [passport, setPassport] = useState('')
    const [region, setRegion] = useState<IRegion | null>(null)
    const [kindOfActivity, setKindOfActivity] = useState<IKindOfActivity | null>(null)

    const selectRegion = (id?: string) => {
        setRegion(props.regions.find(item => item.id === id) || null)
    }
    const selectKindOfActivity = (id?: string) => {
        setKindOfActivity(props.kindsOfActivity.find(item => item.id === id) || null)
    }

    const add = () => {
        if (name && surname && secondName && passport && region && kindOfActivity) {
            props.add({
                name,
                surname,
                secondName,
                passport,
                regionId: region.id,
                kindOfActivityId: kindOfActivity.id
            })
        }
    }

    return <Dialog open={props.open} onClose={props.onClose}>
        <Container>
            <Grid container spacing={2} sx={{padding: '25px'}}>
                <Grid item xs={12}>
                    <CustomInput label={'Имя'} value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomInput label={'Фамилия'} value={surname} onChange={(e) => setSurname(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomInput label={'Отчество'} value={secondName}
                                 onChange={(e) => setSecondName(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomInput label={'Паспорт'} value={passport}
                                 onChange={(e) => setPassport(e.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomSelect label={'Регион'}
                                  value={region?.id || ''}
                                  onChange={(e) => selectRegion(e.target.value)}
                    >
                        {props.regions.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                        ))}
                    </CustomSelect>
                </Grid>
                <Grid item xs={12}>
                    <CustomSelect label={'Вид деятельности'}
                                  value={kindOfActivity?.id || ''}
                                  onChange={(e) => selectKindOfActivity(e.target.value)}
                    >
                        {props.kindsOfActivity.map(item => (
                            <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                        ))}
                    </CustomSelect>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={add} variant={'contained'} color={'secondary'}>Добавить</Button>
                </Grid>
            </Grid>
        </Container>
    </Dialog>
}

export default PayersModal