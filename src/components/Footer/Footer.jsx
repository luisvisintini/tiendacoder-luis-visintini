import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <div className='text-center mt-5'>
            <p className=''>Todos los derechos reservados - Adams Vape { new Date().getFullYear() }</p>
            <p>Sitio creado por <span className='fw-bold'>Luis Visintini</span></p>
        </div>
    </div>
  )
}

export default Footer