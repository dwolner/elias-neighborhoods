import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import GoogleMapReact from 'google-map-react';

export default function Map() {
    const mapCenter = { lat: 32.85444283834149, lng: -117.01069343514554 }
    return (
        <div className='flex flex-wrap justify-center items-start overflow-hidden p-4 h-96'>
            <GoogleMapReact bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }} defaultCenter={mapCenter} defaultZoom={16}></GoogleMapReact>
        </div>
    )
}
