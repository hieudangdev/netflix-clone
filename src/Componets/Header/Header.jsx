import Search from 'Componets/Header/Search/Search'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'Router/Router'

function Header() {
    const [show, setshow] = useState(false)
    console.log(show)
    return (
        <header className='flex h-14  fixed top-0  z-50 px-5   justify-between  items-center w-full bg-gray-900/40 shadow-lg shadow-gray-700/10 '>
            <div className=' text-[18px] lg:text-[24px] flex h-full uppercase items-center '>
                <Link to={routes.home} className='text-red-600 font-[900] cursor-pointer '>
                    PHIMVIP
                </Link>

                <div className={`hidden sm:flex text-white   h-full text-[15px] ml-3  `}>
                    <Link to={routes.top} className='hover:bg-gray-400/10 px-4 leading-[56px] '>
                        <div>Phim Hot</div>
                    </Link>
                    <Link to={routes.movies} className='hover:bg-gray-400/10 px-4 leading-[56px] '>
                        <div>Phim lẻ</div>
                    </Link>
                    <Link to={routes.tv} className='hover:bg-gray-400/10 px-4 leading-[56px] '>
                        <div>Phim bộ</div>
                    </Link>
                </div>
            </div>
            <button className='cursor-default px-6  '>
                <Search />
            </button>

            <div>
                <button
                    type='button'
                    onClick={() => setshow(!show)}
                    className='inline-flex relative items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                >
                    <svg aria-hidden='true' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                </button>
                <ul className={`${show ? 'absolute' : 'hidden'} text-white text-[14px] w-[200px] min-h-[50px] right-1 pt-2 shadow-lg rounded-xl top-14 content-none   bg-gray-900/90`}>
                    <Link to={routes.top}>
                        <li className=' h-10 content-center  px-4 border-b border-b-gray-600/20 leading-10 align-middle'>Phim Hot</li>
                    </Link>
                    <Link to={routes.movies}>
                        <li className=' h-10 content-center  px-4 border-b border-b-gray-600/20 leading-10 align-middle  '>Phim lẻ</li>
                    </Link>
                    <Link to={routes.tv}>
                        <li className=' h-10 content-center  px-4 border-b border-b-gray-600/20 leading-10 align-middle  '>Phim bộ</li>
                    </Link>
                    <Link to={routes.home}>
                        <li className=' h-10 content-center  px-4 border-b border-b-gray-600/20 leading-10 align-middle  '>Đăng nhập</li>
                    </Link>
                </ul>
            </div>
            <div className=' lg:inline-block '>
                <button className='hidden lg:inline-block text-[14px] bg-red-600 text-white p-2 rounded-sm'>Đăng nhập</button>
            </div>
        </header>
    )
}

export default Header
