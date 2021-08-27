import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function map() {
    const [viewport, setViewport] = useState({
        width: '700px',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4373,
        zoom: 5
    });

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/waleoxy/cksriuph826bn17o7xfy9jfdl"
            mapboxApiAccessToken={process.env.mapBox_key}
        >
        </ReactMapGL>
    )
}

export default map  
