import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import LinkIcon from '../icons/LinkIcon'

const IMAGES = [
  {
    id: 1,
    title: "Space-x",
    img: "/spaceX.webp",
    demo: "https://spacex-launches-three.vercel.app/",
  },
  {
    id: 2,
    title: "Dashboard - Nextjs",
    img: "/dashboard.webp",
    demo: "https://nextjs-dashboard-lime-five-76.vercel.app/"
  },
  {
    id: 3,
    title: "Portfolio",
    img: "/portfolio.webp",
    demo: "https://662b022b93e33c46c2f90030--regal-tulumba-07d207.netlify.app/"
  }
]

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className='w-full md:w-1/2 flex justify-center md:justify-normal cursor-grab'>
      <div className="embla" ref={emblaRef}>
        <div className='embla__container'>
          {
            IMAGES.map(({id, title, img, demo}) => (
              <div className='embla__slide' key={id}>
                <img src={img} alt={title} className='' />
                <div className='absolute top-0 m-4 flex justify-center items-center gap-4'>
                  <a href={demo} className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'><LinkIcon /> Demo</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
