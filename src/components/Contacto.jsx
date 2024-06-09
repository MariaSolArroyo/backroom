import { Button } from './Button'

export const Contacto = () => {
  return (
        <div className='bg-contact bg-cover text-white lg:min-h-[70vh] min-h-[150vh] items-center justify-center flex pt-32 lg:pt-20' id='contacto'>
            <div className='lg:flex items-center justify-center p-10'>
                <div className='lg:w-1/2 justify-center items-center p-10 lg:border-r-2  pr-12'>
                    <h1 className='text-3xl'>En <span className='text-fuxia'> Backroom</span>, tu éxito comienza con un equipo a la medida de tus necesidades</h1>
                    <p className='text-2xl font-extralight'>¿listo para transformar tu comunicación ?</p>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center p-10 gap-4">
                    <div>
                    <img src="assets/img/contacto/img-cntact.png" className='w-18 mb-4' alt="" />

                    </div>
                    <p className='text-2xl lg:w-1/2 '>¡Contáctanos  ahora y construyamos juntos tu estrategia ideal!</p>
                    <Button texto="AGENDÁ UNA LLAMADA" />
                </div>
            </div>
        </div>
  )
}
