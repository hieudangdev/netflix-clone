import Search from 'Componets/Header/Search/Search'
import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'Router/Router'

function Header() {
    return (
        <header className='flex h-14  fixed top-0  z-50 px-5   justify-between uppercase items-center w-full bg-gray-900/40 shadow-lg shadow-gray-700/10 '>
            <div className=' text-[24px] flex h-full items-center '>
                <Link to={routes.home} className='text-red-600 font-[900] cursor-pointer '>
                    PHIMVIP
                </Link>

                <div className='sm:flex text-white hidden  h-full text-[15px] ml-3  '>
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
            <div>
                <button className=' cursor-default px-6  '>
                    <Search />
                </button>
                <button className='text-[14px] bg-red-600 text-white p-2 rounded-sm'>Đăng nhập</button>
            </div>
        </header>
    )
}

export default Header
