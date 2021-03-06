import Head from 'next/head'
import PageBlock from '../components/PageBlock'
import Hero from '../components/Hero'
import About from '../components/About'
import Listings from '../components/Listings'
import Videos from '../components/Videos'
import Gallery from '../components/Gallery'
import Map from '../components/Map'
import ContactUs from '../components/ContactUs'

export default function Home() {
    return (
        <PageBlock>
            <Hero />
            <ContactUs />
            <About />
            <Gallery />
            <Listings />
            <Videos />
            <Map />
        </PageBlock>
    )
}
