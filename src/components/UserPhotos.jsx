import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPhotos } from "../redux/action";
import CardPhoto from "./CardPhoto";

function UserPhotos({ username }) {
    const photos = useSelector(state => state.userPhotos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserPhotos(username))
    }, [username])

    // console.log(photos)

    return (
        <div className="m-auto p-2">
            <div className="sm:columns-2 md:columns-3 max-[60rem]">
                {photos.length && photos.map(photo => (
                        <CardPhoto key={photo.id} id={photo.id} slug={photo.slug} photo={photo.urls.small} userName={photo.user.name} userImage={photo.user.profile_image.medium} username={photo.user.username} />
                ))}
            </div>
        </div>
    )
}

export default UserPhotos;