import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import siteData from '@constants/data'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageBlock({ children, ...customMeta }) {
    const router = useRouter()

    const meta = {
        title: `${siteData.neighborhoodName} Community - ${siteData.city} ${siteData.zip}`,
        description: siteData.neighborhoodDescription,
        image: '/favicon.png',
        type: 'website',
        ...customMeta,
    }
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name='robots' content='follow, index' />
                <meta content={meta.description} name='description' />
                <meta property='og:url' content={`https://danwolner.com${router.asPath}`} />
                <link rel='canonical' href={`https://danwolner.com${router.asPath}`} />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
                <link href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Roboto+Mono:wght@300;500;700&family=Roboto:wght@300;500;700&display=swap' rel='stylesheet' />
                <link rel='shortcut icon' href='/media/DW_logo_fav_128.png' />
                <meta property='og:type' content={meta.type} />
                <meta property='og:site_name' content='Daniel Wolner' />
                <meta property='og:description' content={meta.description} />
                <meta property='og:title' content={meta.title} />
                <meta property='og:image' content={meta.image} />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@danwolner' />
                <meta name='twitter:title' content={meta.title} />
                <meta name='twitter:description' content={meta.description} />
                <meta name='twitter:image' content={meta.image} />
                {meta.date && <meta property='article:published_time' content={meta.date} />}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </Head>
            <main className='dark:bg-black-900 w-full'>
                <div className='w-full fixed z-10 bg-white dark:bg-black'>
                    <Navbar />
                </div>
                <div style={{ paddingTop: '4.5rem' }}>{children}</div>
                <Footer />
            </main>
        </div>
    )
}
