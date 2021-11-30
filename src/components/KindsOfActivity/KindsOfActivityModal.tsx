import {IKindOfActivity, IKindOfActivityWithoutId} from '../../types/dto'
import React, {useEffect, useRef, useState} from 'react'
import {Button, Checkbox, Dialog, TextField} from '@mui/material'

type Props = {
    open: boolean
    onClose(): void
    kindOfActivity: IKindOfActivity | null
    add(kindOfActivity: IKindOfActivityWithoutId): void
    edit(kindOfActivity: IKindOfActivity): void
    delete(kindOfActivityId: string): void
}

const KindsOfActivityModal: React.FC<Props> = (props) => {
    const [title, setTitle] = useState(props.kindOfActivity?.title || '')
    const [useInSimpleTax, setUseInSimpleTax] = useState(props.kindOfActivity?.useInSimpleTax || false)

    useEffect(() => {
        setTitle(props.kindOfActivity?.title || '')
        setUseInSimpleTax(props.kindOfActivity?.useInSimpleTax || false)
    }, [props.kindOfActivity])

    const onAddClick = () => {
        if (title) {
            props.add({title, useInSimpleTax})
            props.onClose()
            setTitle('')
            setUseInSimpleTax(false)
        }
    }

    const onEditClick = () => {
        if (title  && props.kindOfActivity) {
            props.edit({
                id: props.kindOfActivity.id,
                title,
                useInSimpleTax
            })
            props.onClose()
            setTitle('')
            setUseInSimpleTax(false)
        }
    }

    const onDeleteClick = () => {
        if (props.kindOfActivity) {
            props.delete(props.kindOfActivity.id)
            props.onClose()
            setTitle('')
            setUseInSimpleTax(false)
        }
    }

    return <Dialog open={props.open} onClose={props.onClose}>
        <TextField value={title}
                   onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Checkbox checked={useInSimpleTax}
                  onChange={(e) => setUseInSimpleTax(e.currentTarget.checked)}
        />

        {props.kindOfActivity
            ?
            <>
                <Button variant={'contained'} onClick={onEditClick}>Изменить</Button>
                <Button variant={'contained'} onClick={onDeleteClick}>Удалить</Button>
            </>
            :
            <Button variant={'contained'} onClick={onAddClick}>Добавить</Button>
        }
    </Dialog>
}

export default KindsOfActivityModal