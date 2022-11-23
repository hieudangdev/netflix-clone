import React from 'react'

function Header() {
    return (
        <header className='flex h-10 fixed top-0 z-50 px-5  justify-between items-center w-full bg-gray-900/40 shadow-lg shadow-gray-700/10 '>
            <div className=' text-[18px] flex h-full items-center '>
                <h1 className='text-red-600 font-[900]'>PHIMVIP</h1>

                <div className='sm:flex text-white hidden  h-full text-[14px] ml-3  '>
                    <button className='hover:bg-gray-400/10 px-3  rounded-sm'>Tìm kiếm</button>
                    <button className='hover:bg-gray-400/10 px-3  rounded-sm'>Phim hot</button>
                    <button className='hover:bg-gray-400/10 px-3  rounded-sm'>Phim lẻ</button>
                    <button className='hover:bg-gray-400/10 px-3  rounded-sm'>Phim bộ</button>
                </div>
            </div>
            <button className='text-[14px] bg-red-600 text-white p-1 rounded-sm'>Đăng nhập</button>
        </header>
    )
}

export default Header
