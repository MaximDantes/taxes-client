import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import store from './store/store'
import {ThemeProvider} from '@mui/material'
import {theme} from './style/theme'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
