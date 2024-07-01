import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Link } from "react-router-dom"

function CardPhoto ( { photo, userName, userImage, username, id, slug } ) {

    return (
        <article className="py-4 mx-1">
            <Link to={`/photo/${slug}`}>
                <div className="relative overflow-hidden">
                    {/* <img className="object-cover" src={photo} alt="" /> */}
                    <LazyLoadImage 
                        src={photo}
                        effect="blur"
                        threshold={10}
                    />
                    <div className=" absolute h-full w-full bg-black/40 flex -bottom-0 hover:bottom-1 opacity-0 hover:opacity-100 transition-all duration-300">
                        <div className="flex w-full h-12 p-2 my-2 gap-2 items-center">
                            <img className="rounded-full h-10 w-10" src={userImage} alt="" />
                            <div>
                                <p className="text-white/90 font-medium">{userName}</p>
                                    <p className="text-white/80 text-sm">@{username}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default CardPhoto