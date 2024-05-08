import HomeIcon from "./icons/HomeIcon"
import MenuIcon from "./icons/MenuIcon"
import UserIcon from "./icons/UserIcon"
import Searchbar from "./Searchbar"

// ---------
const BUTTONS = ["Wallpapers", "Naturaleza", "Viajar", "Arquitectura e Interiores", "Fotografia Callejera", "Pelicula", "Animales", "Moda y Belleza", "Gente"]
// ---------

function Header () {
    return (
        <header className="fixed top-0 z-10 w-screen h-auto bg-white border-b-2">
            <nav className="p-2 m-auto text-wrap">
                <div className="h-14 flex justify-between items-center p-2">
                    <div className="w-full h-full items-center flex gap-4">
                        <span title="Home"><HomeIcon width="40" height="40" /></span>
                        <Searchbar />
                    </div>
                    <div className="flex mr-4 gap-4">
                        <span><UserIcon width="35" height="35"/></span>
                        <span><MenuIcon width="35" height="35"/></span>
                    </div>
                </div>
            </nav>
            <div className="h-10 flex items-center justify-between my-1">
                <ul className="w-1/4 flex justify-center items-center gap-4">
                    <li><button className="text-gray-500 text-base text-wrap hover:text-black transition">Editorial</button></li>
                    <li><button className="text-gray-500 text-base text-wrap hover:text-black transition">Seguidos</button></li>
                </ul>
                <ul className="w-3/4 flex items-center justify-center gap-5 border-x-2 border-gray-400">
                    {
                        BUTTONS.map((button, id) => (
                            <li key={id}><button className="text-gray-500 text-base text-wrap hover:text-black transition">{button}</button></li> 
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header