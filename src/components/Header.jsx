import { Link } from "react-router-dom"
import HomeIcon from "./icons/HomeIcon"
import Searchbar from "./Searchbar"

// import MenuIcon from "./icons/MenuIcon"
// import UserIcon from "./icons/UserIcon"

function Header () {
    return (
        <header className="fixed top-0 z-10 w-screen h-auto bg-white border-b-2">
            <nav className="p-2 m-auto text-wrap">
                <div className="h-14 flex justify-between items-center p-2">
                    <div className="w-full h-full items-center flex gap-4">
                        <Link to="/">
                            <span title="Home"><HomeIcon width="40" height="40" /></span>
                        </Link>
                        <Searchbar />
                    </div>
                    <div className="flex mr-4 gap-4">
                        {/* <span><UserIcon width="35" height="35"/></span>
                        <span><MenuIcon width="35" height="35"/></span> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header