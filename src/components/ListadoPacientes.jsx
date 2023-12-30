import React, { Component } from 'react'
import Paciente from './Paciente';




  function ListadoPacientes ({pacientes, setPaciente}) {
    return (
      <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'> 

      

      { pacientes && pacientes.length ?

    <>
        <h1 className='font-black text-3xl text-center' >God bless you from listado pacientes.</h1>
              
        <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {' '} 
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>

       { pacientes.map(paciente => (
          
          <Paciente 
              key ={paciente.Id}
              paciente ={paciente}
              setPaciente = {setPaciente}
          />

      ))}
      </>

      : (
         <>
            <h1 className='font-black text-3xl text-center' >No hay pacientes.</h1>
              
              <p className='text-xl mt-5 mb-10 text-center'>
                  Comienza agregando pacientes  {' '} 
                  <span className='text-indigo-600 font-bold'>Y apareceran en este lugar</span>
              </p>
      
         </>

      )}



       
       

      </div>
    )
  }

  export default ListadoPacientes;

