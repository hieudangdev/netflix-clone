import React from 'react'
import placeholderSrc from '../../Assets/Images/Noimage.png'

function Images({ src, ...props }) {
    return (
        <div>
            <img src={src || placeholderSrc} className={props.className} alt={props.alt || ''} />
        </div>
    )
}
export default Images
