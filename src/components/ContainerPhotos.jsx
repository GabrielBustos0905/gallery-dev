import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPhotos } from "../redux/action"

import CardPhoto from "./CardPhoto"

function ContainerPhotos () {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div className="sm:columns-2 md:columns-3 max-[60rem] m-auto p-2">
            {/* {photos?.map(photo => (
                    <img src={photo.urls.small} alt="" />
            ))} */}

            {photos.length ? photos.map(photo => (
                    <CardPhoto key={photo.id} photo={photo.urls.small} userName={photo.user.name} userImage={photo.user.profile_image.medium} username={photo.user.username} />
            )) : <p></p>}
        </div>
    )
}

export default ContainerPhotos