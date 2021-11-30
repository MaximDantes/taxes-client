import React, {useState} from 'react'
import {IKindOfActivity, IKindOfActivityWithoutId} from '../../types/dto'
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import KindsOfActivityModal from './KindsOfActivityModal'
import {Add} from '@mui/icons-material'
import {useDispatch} from 'react-redux'
import {addKindOfActivity, deleteKindOfActivity, editKindOfActivity} from '../../store/kinds-of-activity/thunks'

type Props = {
    kindOfActivity: IKindOfActivity[]
}

const KindsOfActivity: React.FC<Props> = (props) => {
    const dispatch = useDispatch()

    const [selectedKind, setSelectedKind] = useState<IKindOfActivity | null>(null)
    const [open, setOpen] = useState(false)

    const onRowClick = (kindOfActivity: IKindOfActivity) => {
        setSelectedKind(kindOfActivity)
        setOpen(true)
    }

    const onAddClick = () => {
        setSelectedKind(null)
        setOpen(true)
    }

    const onClose = () => {
        setSelectedKind(null)
        setOpen(false)
    }

    const add = (kindOfActivity: IKindOfActivityWithoutId) => {
        dispatch(addKindOfActivity(kindOfActivity))
    }

    const edit = (kindOfActivity: IKindOfActivity) => {
        dispatch(editKindOfActivity(kindOfActivity))
    }

    const remove = (kindOfActivityId: string) => {
        dispatch(deleteKindOfActivity(kindOfActivityId))
    }

    return <>
        <KindsOfActivityModal open={open}
                              onClose={onClose}
                              kindOfActivity={selectedKind}
                              add={add}
                              edit={edit}
                              delete={remove}
        />

        <IconButton onClick={onAddClick}>
            <Add/>
        </IconButton>

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Наименование</TableCell>
                        <TableCell>Используется в упрощенной форме</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.kindOfActivity.map(item => (
                        <TableRow key={item.id} onClick={() => onRowClick(item)}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.useInSimpleTax ? 'Да' : 'Нет'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default KindsOfActivity