import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getPhoto } from "../redux/action"
import UserIcon from "../components/icons/UserIcon"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import MaximizeIcon from "../components/icons/MaximizeIcon"
import MinimizeIcon from "../components/icons/MinimizeIcon"
import HeartIcon from "../components/icons/HeartIcon"

function PhotoDetail () {
    const { id } = useParams()
    const photo = useSelector((state) => state.photo)
    const dispatch = useDispatch()

    const [size, setSize] = useState(false)

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [])

    const changeSize = (e) => {
        e.preventDefault()
        setSize(!size)
    }

    return (
        <div className="w-5/6 mt-24 mx-4 p-4">
            <div className="flex justify-between">
                <Link to={`/user/${photo.user?.username}`}>
                    <div className="flex items-center">
                        <LazyLoadImage 
                            src={photo.user?.profile_image.medium}
                            placeholder={<UserIcon />}
                            className="rounded-full cursor-pointer"
                        />
                        <div className="ml-3">
                            <p className="text-gray-600">{photo.user?.name}</p>
                            <p className="font-medium text-blue-500">@{photo.user?.username}</p>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center">
                    <HeartIcon width={35} height={35} />
                    <p className="text-lg ml-1 text-gray-600">{photo.likes} likes</p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <div className="relative">
                    <LazyLoadImage 
                        src={size ? photo.urls?.raw : photo.urls?.small}
                        effect="blur"
                    />
                    <div className="top-0 absolute h-full w-full opacity-0 hover:opacity-100 transition duration-300">
                        <button onClick={(e) => changeSize(e) }>
                            {
                                size === false ? <MaximizeIcon className="text-gray-100 absolute top-1 right-1"/> : <MinimizeIcon className="text-gray-100 absolute top-1 right-1"/>
                            }
                         </button>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex items-center">
                    <p className="text-lg text-gray-600">Description:</p>
                    <p className="text-md text-gray-600 ml-4">{photo.alt_description}</p>
                </div>
                <div className="flex items-center">
                    <p className="text-lg text-gray-600">Width:</p>
                    <p className="text-md text-gray-600 ml-4">{photo.width}px</p>
                </div>
                <div className="flex items-center">
                    <p className="text-lg text-gray-600">Height:</p>
                    <p className="text-md text-gray-600 ml-4">{photo.height}px</p>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail