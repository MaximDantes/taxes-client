import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import taxesReducer from './taxes/reducer'
import appReducer from './app/reducer'
import regionsReducer from './regions/reducer'
import kindsOfActivityReducer from './kinds-of-activity/reducer'
import payersReducer from './payers/reducer'
import taxRatesReducer from './tax-rates/reducer'
import declarationsReducer from './declarations/reducer'

const rootReducer = combineReducers({
    app: appReducer,
    taxes: taxesReducer,
    regions: regionsReducer,
    kindsOfActivity: kindsOfActivityReducer,
    payers: payersReducer,
    taxRates: taxRatesReducer,
    declarations: declarationsReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
export type State = ReturnType<typeof rootReducer>