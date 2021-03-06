import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getRegions} from './store/regions/thunks'
import {getKindsOfActivity} from './store/kinds-of-activity/thunks'
import {getPayers} from './store/payers/thunks'
import {getDeclarations} from './store/declarations/thunks'
import {getTaxes} from './store/taxes/thunks'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Container, CssBaseline} from '@mui/material'
import Rates from './components/Rates/Rates'
import {getTaxesSelector} from './selectors/taxes-selectors'
import KindsOfActivity from './components/KindsOfActivity/KindsOfActivity'
import {getKindsOfActivitySelector} from './selectors/kinds-of-activity-selector'
import {getRegionsSelector} from './selectors/regions-selectors'
import Payers from './components/Payers/Payers'
import {getPayersSelector} from './selectors/payers-selector'
import Declarations from './components/Declarations/Declarations'

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTaxes())
        dispatch(getRegions())
        dispatch(getKindsOfActivity())
        dispatch(getPayers())
    }, [])

    const taxes = useSelector(getTaxesSelector)
    const kindsOfActivity = useSelector(getKindsOfActivitySelector)
    const regions = useSelector(getRegionsSelector)
    const payers = useSelector(getPayersSelector)

    return <>
        <CssBaseline/>

        <BrowserRouter>

            <NavBar/>

            <Container maxWidth={'lg'} sx={{padding: '15px 0'}}>
                <Routes>
                    <Route path={'kindsOfActivity'} element={<KindsOfActivity kindOfActivity={kindsOfActivity}/>}/>
                    <Route path={'rates'} element={<Rates taxes={taxes}/>}/>
                    <Route path={'payers'} element={
                        <Payers payers={payers} regions={regions} kindsOfActivity={kindsOfActivity}/>
                    }/>
                    <Route path={'payers/:id'} element={
                        <Declarations payers={payers} regions={regions} kindsOfActivity={kindsOfActivity}/>
                    }/>
                </Routes>
            </Container>
        </BrowserRouter>
    </>
}

export default App
