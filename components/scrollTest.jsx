import React, { useEffect, useRef, useState } from 'react'

function ScrollTest() {
    const ref = useRef()

    const [position, setPosition] = useState('');
    const [Speed, setSpeed] = useState({ horizontal: 1, vertical: 1 })
    // console.log(Speed)
    console.log('second (state) : ', position)

    const convertToEven = (num) => (num % 2 === 0) ? (num - 1) : num

    const handler = (e) => {
        const { clientX, clientY } = e
        const horizontalStep = Math.round(window.innerWidth / 4);
        const verticalStep = Math.round(window.innerHeight / 3);

        // set speed's
        let speed = { ...Speed }
        const horizontalSpeed = Math.round((((horizontalStep - clientX) / horizontalStep) + 1) ** 4), verticalSpeed = Math.round((((verticalStep - clientY) / verticalStep) + 1) ** 4);
        speed.horizontal = convertToEven(horizontalSpeed)
        speed.vertical = convertToEven(verticalSpeed)
// console.log('vertical speed : ',((verticalStep - clientY) / verticalStep) + 1)
// console.log('hor speed : ',((horizontalStep - clientX) / horizontalStep) + 1)
        // set position
        let mousePosition = '';
        // left
        if (clientX > 0 && clientX < horizontalStep) mousePosition += 'l';
        // right
        if (clientX < window.innerWidth && clientX > window.innerWidth - horizontalStep) mousePosition += 'r'
        // top
        if (clientY > 0 && clientY < verticalStep) mousePosition += 't'
        // bottom
        if (clientY < window.innerHeight && clientY > window.innerHeight - verticalStep) mousePosition += 'b'

        // console.log('first (handler) :', position,Speed.horizontal, mousePosition)
        // console.log('condition : ', (clientX > 0 && clientX < horizontalStep))
        // console.log(position !== mousePosition , (speed.horizontal !== Speed.horizontal || speed.vertical !== Speed.vertical))

        // setState if exist change
        // if (position !== mousePosition) {
        setPosition(prev => prev === mousePosition ? prev : mousePosition);
        // }
         setSpeed(prev => (speed.horizontal === Speed.horizontal || speed.vertical === Speed.vertical) ? prev :speed)
    }

    // useEffect(() => {
    //     console.log('fdksjlllllllllllllllllllllllllllllllll;')
    // }, [Speed.horizontal,Speed.vertical])
    
    useEffect(() => {
        window.addEventListener("mousemove", handler);
        window.addEventListener("scroll", (e) => e.preventDefault())
        // console.log({ h: window.innerHeight, w: window.innerWidth })

        return () => {
            window.removeEventListener("mousemove", handler)
        }
    }, [])

    useEffect(() => {
        clearInterval(ref.current);

        if (position) {
            // PIXEL PER 100 SECOND 
            const PPS = 50;
            const { horizontal, vertical } = Speed;
            const horizontalScroll = position.includes('r') ? (PPS * horizontal) : position.includes('l') ? ((- PPS) * horizontal) : 0
            const verticalScroll = position.includes('t') ? ((- PPS) * vertical) : position.includes('b') ? (PPS * vertical) : 0

            ref.current = setInterval(() => window.scrollTo({
                top: window.scrollY + verticalScroll,
                left: window.scrollX + horizontalScroll,
                behavior: "smooth",
            }), 100);
        } else {
            clearInterval(ref.current)
        }

        // console.log('useEffect : ', position)
    }, [position, Speed.horizontal, Speed.vertical])



    return (
        <div className="w-[1000%] h-[500vh] flex bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600">
            <img src="./img.jpg" className='h-screen' alt="" />
            <img src="./img2.jpg" className='h-screen' alt="" />
            <img src="./img.jpg" className='h-screen' alt="" />
            <img src="./img2.jpg" className='h-screen' alt="" />
            <img src="./img.jpg" className='h-screen' alt="" />
            <img src="./img2.jpg" className='h-screen' alt="" />
            <img src="./img.jpg" className='h-screen' alt="" />
            <img src="./img2.jpg" className='h-screen' alt="" />
            <img src="./img.jpg" className='h-screen' alt="" />
            <img src="./img2.jpg" className='h-screen' alt="" />
        </div>
    )
}

export default ScrollTest