import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPhotos } from "../redux/action"

import CardPhoto from "./CardPhoto"
import MorePhotos from "./MorePhotos"

function ContainerPhotos () {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div className="m-auto p-2">
            <div className="sm:columns-2 md:columns-3 max-[60rem]">
                {photos.length ? photos.map(photo => (
                        <CardPhoto key={photo.id} photo={photo.urls.small} userName={photo.user.name} userImage={photo.user.profile_image.medium} username={photo.user.username} />
                )) : <p></p>}
            </div>
            <MorePhotos />            
        </div>
    )
}

export default ContainerPhotos