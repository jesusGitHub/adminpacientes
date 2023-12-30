import React from 'react'

function Error ({children}) {
/*El comando rafce genera el esquema de la pagina*/


  return (
    
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
      {children} 
    </div>       

  )
}

export default Error
