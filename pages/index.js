import Head from 'next/head'
import PageBlock from '../components/PageBlock'
import Hero from '../components/Hero'
import About from '../components/About'
import Map from '../components/Map'

export default function Home() {
    return (
        <PageBlock>
            <Hero />
            <About />
            <Map />
        </PageBlock>
    )
}
