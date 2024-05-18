import { useDispatch } from "react-redux"
import { morePhotos } from "../redux/action"

function MorePhotos ({ search }) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        if(search) dispatch(morePhotos(search))
        dispatch(morePhotos())
    }

    return (
        <div className="w-full h-10 flex justify-center p-2 my-8">
            <button onClick={(e) => handleClick(e)} className="w-3/4 md:w-1/4 h-10 rounded-md bg-gray-600 text-gray-50 font-medium hover:bg-gray-500 hover:scale-110 transition duration-300">Mas Fotos</button>
        </div>
    )
}

export default MorePhotos