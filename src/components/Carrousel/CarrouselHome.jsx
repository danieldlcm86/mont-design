import Cover1 from '../../assets/Carrousel/Insta_mont_design.png'
// import Cover2 from '../../assets/Carrousel/banho-mueble.jpg'
import Cover3 from '../../assets/Carrousel/comedor-moderno.jpg'
import Cover4 from '../../assets/Carrousel/escritorio-madera-colineal.webp'
import Cover5 from '../../assets/Carrousel/muebles-dark.jpg'
import BannerMain from './Banners/BannerMain'


const Carrousel1 = () => {
    return (
        <>
        <div id="default-carousel" className="relative top-0 w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-56 overflow-hidden md:h-screen">
                {/* <!-- Item 1 --> */}
                <div className="duration-3000 ease-in-out" data-carousel-item="active" >
                    {/* <img src={Cover1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" /> */}
                    <BannerMain className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="duration-2000 ease-in-out" data-carousel-item="inactive">
                    <img src={Cover1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" />
                </div>
                {/* <!-- Item 3 --> */}
                <div className="duration-2000 ease-in-out" data-carousel-item="inactive">
                    <img src={Cover3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" />
                </div>
                {/* <!-- Item 4 --> */}
                <div className="duration-2000 ease-in-out" data-carousel-item="inactive">
                    <img src={Cover4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" />
                </div>
                {/* <!-- Item 5 --> */}
                <div className="duration-1000 ease-in-out" data-carousel-item="inactive">
                    <img src={Cover5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide" />
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        </>
    )
}

export default Carrousel1