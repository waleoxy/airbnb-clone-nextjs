import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '700px',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12
    });


    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/waleoxy/cksriuph826bn17o7xfy9jfdl"
            mapboxApiAccessToken={process.env.mapBox_key}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}>
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            className="text-l cursor-pointer animate-bounce"
                            aria-label="push-pin">
                            📌
                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ?
                        (
                            <Popup
                                className="rounde-full"
                                latitude={result.lat}
                                longitude={result.long}
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                            >
                                {result.title}
                            </Popup>
                        ) :
                        (false)
                    }
                </div>
            )
            )}
        </ReactMapGL>
    )
}

export default map  
