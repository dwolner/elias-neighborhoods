import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import store from '../store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider defaultTheme='system' attribute='class'>
                <Component {...pageProps} />
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default MyApp