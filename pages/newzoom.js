import { MapInteractionCSS } from 'react-map-interaction';

// This component uses CSS to scale your content.
// Just pass in content as children and it will take care of the rest.
const ThingMap = () => {
    return (
        // <div className='w-[1200px] h-[1200px]'>
            <MapInteractionCSS
                minScale={1}
                maxScale={1.2}
                showControls={true}
                translationBounds={{
                    xMin: 50, xMax: 1549, yMax: 0
                }}
                onChange={function (e) {
                    console.log(e)
                }}
            >
                <img src="./img2.jpg" className='min-w-[100vw] min-h-screen'/>
                {/* <div className='w-[1200px] h-[1200px] bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600'></div> */}
                {/* <div className="w-[1000%] h-[500vh] flex bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600" /> */}
            </MapInteractionCSS >
        // </div> 
    );
}


export default ThingMap;