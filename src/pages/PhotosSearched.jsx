import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CardPhoto from "../components/CardPhoto"
import { useEffect } from "react"
import { searchPhoto } from "../redux/action"

function PhotoSearched () {
    const dispatch = useDispatch()
    const { search } = useParams()
    const photos = useSelector(state => state.searchedPhotos)

    useEffect(() => {
        dispatch(searchPhoto(search))
    })

    return (
        <div className="h-screen flex flex-col items-center mt-32 mb-8">
            <h2>{search}</h2>
            <div className="sm:columns-2 md:columns-3 max-[60rem] m-auto p-2">
                {photos && photos.length ? photos.map(photo => (
                        <CardPhoto key={photo.id} photo={photo.urls.small} userName={photo.user.name} userImage={photo.user.profile_image.medium} username={photo.user.username} />
                )) : <p></p>}
            </div>
        </div>
    )
}

export default PhotoSearched