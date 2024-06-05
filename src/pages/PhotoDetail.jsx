import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPhoto } from "../redux/action"
import UserIcon from "../components/icons/UserIcon"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import MaximizeIcon from "../components/icons/MaximizeIcon"
import MinimizeIcon from "../components/icons/MinimizeIcon"

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
        console.log(size)
    }

    return (
        <div className="w-5/6 mt-24 mx-4 p-4">
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
            <div className="flex justify-center mt-4">
                <div className="relative">
                    <LazyLoadImage 
                        src={size ? photo.urls?.raw : photo.urls?.small}
                        effect="blur"
                    />
                    <div className="top-0 absolute h-full w-full opacity-0 hover:opacity-100 transition duration-300">
                        <button onClick={(e) => changeSize(e) }>
                            {
                                size === false ? <MaximizeIcon className="text-gray-300 absolute top-1 right-1"/> : <MinimizeIcon className="text-gray-300 absolute top-1 right-1"/>
                            }
                            {/* <MaximizeIcon className="text-gray-300 absolute top-1 right-1"/> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetail