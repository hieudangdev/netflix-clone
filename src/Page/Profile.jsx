import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    let { id } = useParams()
    return (
        <div className='mt-[50px] text-white'>
            <div>profile</div>
            <div>{id}</div>
            <div>profile</div>
        </div>
    )
}

export default Profile
