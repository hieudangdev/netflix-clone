import React from 'react'

function Footer() {
    return (
        <div className='min-h-[300px] grid grid-cols-2 items-center bg-secondary  after:absolute after:contents after:inset-0 after:bg-gray-700/60  justify-center px-10   relative w-full ' >
            <h1 className='text-red-600 text-[20px] font-[900]'>PHIMVIP</h1>
            <ul className='text-white/80 font-bold text-[14px] leading-10' >
                <li>Thanks for watching PhimVip</li>
                <li>The best Movie website in the worlds</li>
                <li>Audio in 320kbps </li>
                <li>Bitrate Higher Amazon company</li>
                <li>Follow us </li>
            </ul>

        </div >
    )
}

export default Footer