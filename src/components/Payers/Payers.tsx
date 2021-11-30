import React, {useState} from 'react'
import {IKindOfActivity, IPayer, IPayerWithoutId, IRegion} from '../../types/dto'
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {Add} from '@mui/icons-material'
import {useDispatch} from 'react-redux'
import {addPayer, deletePayer, editPayer} from '../../store/payers/thunks'
import PayersModal from './PayersModal'
import {useNavigate} from 'react-router-dom'

type Props = {
    payers: IPayer[]
    regions: IRegion[]
    kindsOfActivity: IKindOfActivity[]
}

const Payers: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    const add = (payer: IPayerWithoutId) => {
        setOpen(false)
        dispatch(addPayer(payer))
    }

    return <>
        <PayersModal open={open}
                     onClose={() => setOpen(false)}
                     regions={props.regions}
                     kindsOfActivity={props.kindsOfActivity}
                     add={add}
        />

        <IconButton onClick={() => setOpen(true)}>
            <Add/>
        </IconButton>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ФИО</TableCell>
                        <TableCell>Паспорт</TableCell>
                        <TableCell>Вид деятельности</TableCell>
                        <TableCell>Регион</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.payers.map(item => (
                        <TableRow key={item.id} onClick={() => navigate(item.id)}>
                            <TableCell>{`${item.name} ${item.surname} ${item.secondName}`}</TableCell>
                            <TableCell>{item.passport}</TableCell>
                            <TableCell>
                                {props.kindsOfActivity.find(kind => kind.id === item.kindOfActivityId)?.title}
                            </TableCell>
                            <TableCell>
                                {props.regions.find(region => region.id === item.regionId)?.title}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default Payers