import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from 'Router/Router'

function Search() {
    const navigate = useNavigate()
    const [searchValue, setsearchValue] = useState('')
    console.log(searchValue)
    return (
        <div>
            <div className='relative w-[300px] h-10 rounded-full bg-gray-700/50 overflow-hidden'>
                <input
                    type='search'
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            setsearchValue('')
                            navigate(`/search/${searchValue}`)
                        }
                    }}
                    onChange={(e) => setsearchValue(e.target.value)}
                    value={searchValue}
                    className='block  h-full w-full bg-transparent p-4 pr-10 text-base font-normal text-white rounded-full outline-none '
                    placeholder='Search Movies'
                />
                <Link to={routes.searchLink(searchValue)}>
                    <div onClick={() => setsearchValue('')} className='absolute inset-y-0 right-0 flex items-center p-3 hover:bg-slate-600 '>
                        <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' stroke='currentcolor' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Search
