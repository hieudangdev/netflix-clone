import { SearchIcon } from 'Assets/icon'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from 'Router/Router'

function Search({ className }) {
    const navigate = useNavigate()
    const [searchValue, setsearchValue] = useState('')

    return (
        <div>
            <div className={className}>
                <input
                    type='search'
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            setsearchValue('')
                            navigate(`/search/${searchValue}`)
                        }
                    }}
                    onChange={(e) => setsearchValue(e.target.value.trim())}
                    value={searchValue}
                    className='block  h-full w-full bg-transparent p-4 pr-10 text-base font-normal text-white rounded-full outline-none '
                    placeholder='Search Movies'
                />
                <Link to={routes.searchLink(searchValue)}>
                    <div onClick={() => setsearchValue('')} className='absolute inset-y-0 right-0 flex items-center p-3 hover:bg-slate-600 '>
                        <SearchIcon className='w-5 h-5 text-gray-500  bg-transparent dark:text-gray-400' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Search
