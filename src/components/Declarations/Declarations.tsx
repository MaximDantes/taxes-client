import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentPayer} from '../../store/payers/thunks'
import {getCurrentPayerSelector} from '../../selectors/payers-selector'
import {IKindOfActivity, IPayer, IRegion} from '../../types/dto'
import {Button, Grid, IconButton, MenuItem} from '@mui/material'
import CustomInput from '../common/CustomInput'
import CustomSelect from '../common/CustomSelect'
import {Delete, Edit, Save} from '@mui/icons-material'

type Props = {
    payers: IPayer[]
    regions: IRegion[]
    kindsOfActivity: IKindOfActivity[]
}

const Declarations: React.FC<Props> = (props) => {
    const id = useParams().id
    const dispatch = useDispatch()

    const payer = useSelector(getCurrentPayerSelector)

    useEffect(() => {
        if (id && props.payers && props.regions.length > 0 && props.kindsOfActivity.length > 0) {
            dispatch(setCurrentPayer(id))
        }
    }, [id, props.payers, props.regions, props.kindsOfActivity])

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

    useEffect(() => {
        if (payer) {
            setName(payer.name)
            setSurname(payer.surname)
            setSecondName(payer.secondName)
            setPassport(payer.passport)
            selectRegion(payer.regionId)
            selectKindOfActivity(payer.kindOfActivityId)
        }
    }, [payer])

    return <>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <CustomInput label={'Имя'} value={name} onChange={(e) => setName(e.currentTarget.value)}/>
            </Grid>
            <Grid item xs={2}>
                <CustomInput label={'Фамилия'} value={surname} onChange={(e) => setSurname(e.currentTarget.value)}/>
            </Grid>
            <Grid item xs={2}>
                <CustomInput label={'Отчество'} value={secondName}
                             onChange={(e) => setSecondName(e.currentTarget.value)}/>
            </Grid>
            <Grid item xs={2}>
                <CustomInput label={'Паспорт'} value={passport} onChange={(e) => setPassport(e.currentTarget.value)}/>
            </Grid>
            <Grid item xs={2}>
                <CustomSelect label={'Регион'}
                              value={region?.id || ''}
                              onChange={(e) => selectRegion(e.target.value)}
                >
                    {props.regions.map(item => (
                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                    ))}
                </CustomSelect>
            </Grid>
            <Grid item xs={2}>
                <CustomSelect label={'Вид деятельности'}
                              value={kindOfActivity?.id || ''}
                              onChange={(e) => selectKindOfActivity(e.target.value)}
                >
                    {props.kindsOfActivity.map(item => (
                        <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                    ))}
                </CustomSelect>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Button variant={'contained'} color={'secondary'}>
                        <Edit/>
                    </Button>

                    <Button variant={'contained'} color={'secondary'}>
                        <Delete/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </>
}
export default Declarations