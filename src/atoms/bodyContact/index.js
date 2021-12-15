import React from 'react'

const BodyContact = () => {
    const content = [
        'Dirección: calle siempre viva',
        'Telefono: 34234234',
        'Email: sharc@gmail.com',
        'Ciudad: Medellin'
      ]
    return (
        <div className=''>
           {content.map(item=>{
               return (
                   <p>{item}</p>
               )
           })}
        </div>
    )
}

export default BodyContact
