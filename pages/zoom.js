import React, { useEffect, useRef, useState } from 'react'

function Zoom() {
    const [scale, setScale] = useState(1)
    useEffect(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            // if any scroll is attempted, set this to the previous value
            // window.addEventListener("scroll",(e) => window.scrollTo(scrollLeft, scrollTop))
        // window.onmousewhile = () => console.log('first')
        window.addEventListener("wheel", (e) => {
            // e.preventDefault()
            const { wheelDelta, wheelDeltaX, wheelDeltaY, which, x, y, } = e;
            console.log({ wheelDelta, wheelDeltaX, wheelDeltaY, which, x, y, })
            let cScale = +ref.current.style.scale || 0;
            console.log(cScale)
            const scop = 0.5
            if (cScale < 5 && Math.sign(wheelDelta) === 1) ref.current.style.scale = (cScale + scop)
            if (cScale > 1 && Math.sign(wheelDelta) === -1) ref.current.style.scale = (cScale - scop)
        })
    }, [])

    const ref = useRef(null);
    console.log(ref)
    return (
        <div className='w-screen h-screen transition-all relative'  >
            <img src='./img2.jpg' className='w-full h-full absolute top-0 left-0' ref={ref} />
        </div>
    )
}

export default Zoom