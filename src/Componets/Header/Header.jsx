import { SearchIcon } from 'Assets/icon'
import Search from 'Componets/Header/Search/Search'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes } from 'Router/Router'

function Header() {
    const [showMenu, setshowMenu] = useState(false)

    return (
        <header
            className='flex h-12  fixed top-0  z-50 px-5   justify-between  items-center  w-full bg-gray-900/40 shadow-lg shadow-gray-700/10 
        '
        >
            <div className=' text-[18px] lg:text-[24px] flex h-full uppercase items-center '>
                <Link to={routes.home} className='text-red-600 font-[900] cursor-pointer '>
                    PHIMVIP
                </Link>

                <div className={`hidden lg:flex text-white   h-full text-[15px] ml-3  `}>
                    <NavLink to={routes.top} className='hover:bg-gray-400/10  px-4 leading-[56px] '>
                        <div>Phim Hot</div>
                    </NavLink>
                    <NavLink to={routes.movies} className='hover:bg-gray-400/10 px-4 leading-[56px] '>
                        <div>Phim lẻ</div>
                    </NavLink>
                    <NavLink to={routes.tv} className='hover:bg-gray-400/10 px-4 leading-[56px] '>
                        <div>Phim bộ</div>
                    </NavLink>
                </div>
            </div>

            <div className='inline-flex  '>
                <div className='  hidden lg:flex'>
                    <Search className=' relative w-[300px]  h-9 rounded-full bg-gray-700/50 overflow-hidden' />

                    <button className='hidden lg:block ml-5 text-[14px] bg-red-600 text-white p-2 rounded-sm'>Đăng nhập</button>
                </div>

                <Link to={routes.search}>
                    <button className='p-2 px-4'>
                        <SearchIcon className='lg:hidden block  w-5 h-14 text-gray-500 dark:text-gray-400' />
                    </button>
                </Link>

                <button
                    type='button'
                    onClick={() => setshowMenu(!showMenu)}
                    className='relative items-center px-3 ml-4  text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                >
                    <svg aria-hidden='true' className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fillRule='evenodd'
                            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                            clipRule='evenodd'
                        ></path>
                    </svg>
                </button>

                <ul
                    onClick={() => setshowMenu(!showMenu)}
                    className={`${showMenu ? 'absolute' : 'hidden'} text-white text-[14px] w-[200px] min-h-[50px] right-1 pt-2 shadow-lg rounded-xl top-14 content-none   bg-gray-900/90`}
                >
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
        </header>
    )
}

export default Header
