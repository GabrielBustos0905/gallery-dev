import EmblaCarousel from "./carousel/EmblaCarousel"

function MoreInfo() {

    return (
        <div className="w-11/12 flex flex-col md:flex-row m-auto mt-28 justify-center items-center md:justify-between">
            <EmblaCarousel />
            <div className="hidden md:relative w-1/2 md:flex flex-row-reverse">
                <img src="/Giant-Phone.webp"/>
                <div className="absolute left-1 top-14 w-48 h-auto">
                    <p className="text-gray-500 text-base text-wrap"><strong className="text-xl">Gallery - Dev</strong> es una pagina en donde puedes buscar imagenes de alta calidad de todo tipo, <strong className="text-blue-300">echa un vistazo!</strong></p>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo