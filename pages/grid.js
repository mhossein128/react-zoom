import React, { useEffect, useState } from 'react'

function Grid() {
    const [Active, setActive] = useState(0)
    useEffect(() => {
        console.log(window.navigator.onLine)
        window.ononline = e => console.log('online')
        window.onoffline = e => console.log('ofline')
    }, [])
    
  return (
    <div className='flex gap-3'>
      <div className='w-[300px] bg-blue-500'>

      </div>
    <div className='w-screen h-screen grid sm:grid-cols-4 gap-3  bg-gray-300'>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
        <div className='  h-full bg-red-600'></div>
    </div>
    </div>
  )
}

export default Grid