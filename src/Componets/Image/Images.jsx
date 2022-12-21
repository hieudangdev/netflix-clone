import React from 'react'
import placeholderSrc from '../../Assets/Images/Noimage.png'

function Images({ src, className, width, height, ...props }) {
    return <img src={src || placeholderSrc} className={className} alt={props.alt || ''} onError={(e) => (e.target.src = placeholderSrc)} />
}
export default Images
