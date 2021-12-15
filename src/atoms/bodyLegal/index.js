import React from 'react'

const BodyLegal = () => {
    const info = [
        { href : 'www.google.com',
          name : 'Documentos CONPES 3874'},
    ]
    return (
        <div>
        {info.map((item)=>{
            return (
                <a href={item.href}>{item.name}</a>
            )
        })}
        </div>   
    )
}

export default BodyLegal; 