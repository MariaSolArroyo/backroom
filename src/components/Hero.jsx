import { useState } from "react";
import { Flecha } from "./Flecha";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Button } from "./Button";



const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  AOS.init();

  return (
    <div className="" id="home">
      <div className="relative isolate px-6 pt-2 lg:px-8">
        <div className="mx-auto max-w-6xl py-12 lg:py-4 ">
          <div className="text-center lg:flex justify-center lg:justify-start items-center lg:text-start ">
            <div className="py-40 lg:py-26" data-aos="fade-up">
              <h1 className="lg:text-7xl text-4xl font-black tracking-tight pb-4 text-gray-900 mt-12" >
                RESCATAMOS TU <br /> MARCA DEL <span className="text-fuxia font-light">CAOS </span> COMUNICATIVO
              </h1>
              <div className="sm:mb-8 lg:flex lg:justify-start items-center gap-2">
                <Button texto="Agendá una llamada gratuita" />
              </div>

            </div>
            <img src="assets/home/img1.png" className='lg:w-80 w-36 lg:relative absolute right-10 top-10' alt="imagen-home" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />


            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              Agendá  una llamada gratuita 
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
