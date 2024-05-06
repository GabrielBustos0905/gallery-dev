function CardPhoto ( { photo, userName, userImage, username } ) {

    // console.log(photo)
    return (
        <article className="py-2">
            <div className="relative overflow-hidden">
                <img className="object-cover" src={photo} alt="" />
                <div className="absolute h-full w-full bg-black/40 flex -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="flex w-full h-12 p-2 my-2 gap-2 items-center">
                        <img className="rounded-full h-10 w-10" src={userImage} alt="" />
                        <div>
                            <p className="text-white/90 font-medium">{userName}</p>
                            <p className="text-white/80 text-sm">@{username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardPhoto