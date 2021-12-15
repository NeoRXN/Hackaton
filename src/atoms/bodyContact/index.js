import React from 'react'

const BodyContact = () => {
    const content = [
        'Dirección: calle siempre viva',
        'Teléfono: 34234234',
        'Email: sharc@gmail.com',
        'Ciudad: Medellín'
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
