import React from 'react'
import placeholderSrc from '../../Assets/Images/Noimage.png'

function Images({ src, className, ...props }) {
    return <img src={src} className={className} alt={props.alt || ''} onError={(e) => (e.target.src = placeholderSrc)} />
}
export default Images
