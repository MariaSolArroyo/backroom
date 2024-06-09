import React from 'react'
import { Flecha } from './Flecha'

export const Button = ({texto}) => {
  return (
        <div className="relative rounded-full inline-flex  px-3 py-1 text-sm lg:justify-start justify-center items-center gap-2 bg-fuxia uppercase font-semibold text-blanco leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {texto}
                  <a href="https://calendly.com/estudiobackroom/30min?month=2024-05" target='_blank' className="font-semibold text-indigo-600 ">
                    <span
                      className="absolute inset-0 text-negro"
                      aria-hidden="true"
                    />
                    <span aria-hidden="true" className="text-negro">
                    
                      <Flecha />
                    </span>
                  </a>
                </div>
    
  )
}
