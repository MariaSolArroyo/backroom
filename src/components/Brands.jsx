import React from 'react'
import Marquee from "react-fast-marquee";

export const Brands = () => {
  const logos = [
    {'img':'public/assets/img/brands/logos/carnesblancas.png'},
    {'img':'public/assets/img/brands/logos/ediba.png'},
    {'img':'public/assets/img/brands/logos/happiness.png'},
    {'img':'public/assets/img/brands/logos/mundosalad.png'},
    {'img':'public/assets/img/brands/logos/onwok.png'},
    {'img':'public/assets/img/brands/logos/orthowebinars.png'},
    {'img':'public/assets/img/brands/logos/salvaje.png'},
    {'img':'public/assets/img/brands/logos/vait.png'},


    ]
  return (
    <div className='bg-rosa py-10' id='proyectos'>
        <div className='py-5'>
            <h1 className='font-bold lg:text-2xl mb-10 text-black'>Marcas que generan impacto junto a nosotros</h1>
            <Marquee pauseOnHover className='lg:my-20 my-10' >
            {logos.map((logo, index)=>(
                <div key={index} className='gap-10 flex ' > 
                <img src={logo.img} alt="" className='mx-5 lg:mx-10 w-20 lg:w-32' /></div>
))}
            </Marquee>

            <Marquee pauseOnHover direction='right'>
            {logos.map((logo, index)=>(
                <div key={index} className='gap-10 flex ' > 
                <img src={logo.img} alt="" className='mx-5 lg:mx-10 w-20 lg:w-32' /></div>
))}
            </Marquee>
        </div>
    </div>
  )
}




