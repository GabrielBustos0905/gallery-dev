import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import CardPhoto from "../components/CardPhoto"
import { useEffect } from "react"
import { searchPhoto } from "../redux/action"
import MorePhotos from "../components/MorePhotos"
import SearchIcon from "../components/icons/SearchIcon"

function PhotoSearched () {
    const dispatch = useDispatch()
    const { search } = useParams()
    const photos = useSelector(state => state.searchedPhotos)

    useEffect(() => {
        dispatch(searchPhoto(search))
    }, [dispatch])

    return (
        <div className="h-screen flex flex-col mt-20 mb-8">
            <div className="flex items-center">
                <h2 className="text-3xl font-semibold capitalize p-4 ml-10">{search}</h2>
                <SearchIcon strokeWidth={2} className={"ml-[-4px] mt-1"}/>
            </div>
            <div className="sm:columns-2 md:columns-3 max-[60rem] m-auto p-2">
                {photos && photos.length ? photos.map(photo => (
                        <CardPhoto key={photo.id} id={photo.id} photo={photo.urls.small} userName={photo.user.name} userImage={photo.user.profile_image.medium} username={photo.user.username} />
                )) : <p></p>}
            </div>
            <MorePhotos search={search}/>
        </div>
    )
}

export default PhotoSearched