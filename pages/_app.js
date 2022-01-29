import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'
import store from '../store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <ReduxProvider store={store}>
            <ThemeProvider defaultTheme='dark' attribute='class'>
                <Component {...pageProps} />
            </ThemeProvider>
        </ReduxProvider>
    )
}

export default MyApp