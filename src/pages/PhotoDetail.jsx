import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getPhoto } from "../redux/action"

function PhotoDetail () {
    const { id } = useParams()
    const photo = useSelector((state) => state.photo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhoto(id))
    }, [])

    return (
        <h1 className="mt-40">Hola Mundo :D {id}</h1>
    )
}

export default PhotoDetail