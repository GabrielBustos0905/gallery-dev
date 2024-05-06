import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><img src="https://imgs.search.brave.com/AVhMGusjPZQhqgaHdqbGBku0yJaQR5P9EiaxJ-jNilQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c29tb3N4Ym94LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNS8xNTc0MDc5/MzQ4XzExODc5Ml8x/NTc0MDc5NTU4X25v/dGljaWFfbm9ybWFs/LTEwMjR4NTc2Lmpw/Zw" alt="/" /></div>
        <div className="embla__slide"><img src="https://imgs.search.brave.com/uL-_nQIHy92s5HGVe3xMlrn4Ddv7lzxBeJO4E6G8s_o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c29tb3N4Ym94LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wNS8zNjQ2MjY5/LTE5MDEzNjkyMzgt/TGVmdDQtMTAyNHg1/NzYuanBn" alt="/" /></div>
        <div className="embla__slide"><img src="https://images.unsplash.com/photo-1714786479680-d0c30f22dd29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="/" /></div>
      </div>
    </div>
  )
}
