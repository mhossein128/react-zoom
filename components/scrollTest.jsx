import React, { useEffect, useRef, useState } from 'react'

function ScrollTest() {
    const ref = useRef()

    const [position, setPosition] = useState('');
    
    const handler = (e) => {
        const { clientX, clientY } = e
        const horizontalStep = Math.round(window.innerWidth / 4)
        const verticalStep = Math.round(window.innerHeight / 5)

        let mousePosition = ''
        if (clientX > 0 && clientX < horizontalStep) mousePosition += 'l'
        if (clientX < window.innerWidth && clientX > window.innerWidth - horizontalStep) mousePosition += 'r'
        if (clientY > 0 && clientY < verticalStep) mousePosition += 't'
        if (clientY < window.innerHeight && clientY > window.innerHeight - verticalStep) mousePosition += 'b'
        setPosition(mousePosition)
    }
    useEffect(() => {
        window.addEventListener("mousemove", handler);
        window.addEventListener("scroll",(e)=>e.preventDefault())
        console.log({ h: window.innerHeight, w: window.innerWidth })
    }, [])

    useEffect(() => {
        clearInterval(ref.current);

        if (position) {
            // PIXEL PER 100 SECOND 
            const PPS = 30;
            const horizontalScroll = position.includes('r') ? (PPS) : position.includes('l') ? (- PPS) : 0
            const verticalScroll = position.includes('t') ? (- PPS) : position.includes('b') ? (PPS) : 0

            ref.current = setInterval(() => window.scrollTo({
                top: window.scrollY + verticalScroll ,
                left:  window.scrollX + horizontalScroll,
                behavior: "smooth",
            }), 100);
            console.log(window.scrollX)
        } else {
            clearInterval(ref.current)
        }

        console.log(position)
    }, [position])



    return (
        <div className="w-[200%] h-[500vh] bg-gradient-to-r from-red-600 to-blue-600">
            <img src="./img.jpg" className='w-full' alt="" />
        </div>
    )
}

export default ScrollTest