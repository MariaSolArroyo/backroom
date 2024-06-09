export const Servicios = () => {
  return (
    <div className="lg:p-20 p-10 flex justify-center items-center relative min-h-[100vh] border-b-8 border-b-fuxia" id="servicios">
    <img src="assets/img/services/img-services2.png" className="hidden lg:flex absolute left-0" alt="" />

      <div className="lg:p-16 p-4 lg:max-w-4xl justify-center">
        <div className="text-start mb-4 lg:pl-24">
            <h2 className="flex items-center justify-start gap-2 font-bold lg:text-4xl text-xl" data-aos="fade-right" data-aos-duration="3000">
                <img src="assets/img/services/bt1.png" alt="" />
                 Somos tu escape del laberinto digital</h2>
            <p className="text-xl leading-normal">En un mundo saturado de información, nuestro equipo despeja el camino, eliminando el estrés de la gestión de la comunicación y la presencia online de tu marca. <span className="font-bold">Dejá que te guiemos hacia la claridad y el éxito.</span></p>
        </div>

        <div className="text-start mb-4 lg:pl-24">
            <h2 className="flex items-center justify-start gap-2 font-bold lg:text-4xl text-xl" data-aos="fade-right" data-aos-duration="3000">
                <img src="assets/img/services/bt2.png" alt="" />
                Tu marca cobra vida</h2>
            <p className="text-xl leading-normal">Nos sumergimos en la esencia de tu marca para crear una identidad visual que destaque. <span className="font-bold">Llevamos a cabo la materialización de tu visión,</span> desde el diseño gráfico hasta la imple mentación de sitios web, garantizando una presencia coherente y cautivadora en todos los puntos de contacto.</p>
        </div>

        <div className="text-start mb-4 lg:pl-24">
            <h2 className="flex items-center justify-start gap-2 font-bold lg:text-4xl text-xl"data-aos="fade-right" data-aos-duration="3000">
                <img src="assets/img/services/bt3.png" alt="" />
                Ads que generan impacto</h2>
            <p className="text-xl leading-normal"><span className="font-bold">Impulsamos la visibilidad con estrategias publicitarias impactantes </span>, desde campañas en redes sociales hasta tácticas específicas para e-commerce, asegurando que cada aspecto de tu marca comunique efectivamente, convierta y destaque en el competitivo mundo digital.</p>
        </div>
      </div>
    </div>
  );
};
