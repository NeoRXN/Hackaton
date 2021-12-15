import React from 'react'

const CardFooter = ({title,children}) => {
    
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}

export default CardFooter;