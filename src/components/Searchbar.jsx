import SearchIcon from "./icons/SearchIcon"
import { useState } from "react"
import { searchPhoto } from "../redux/action"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Searchbar () {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchPhoto(input))
        navigate(`/photo/search/${input}`)
        setInput("")
    }

    return (
          <form onSubmit={(e) => handleSubmit(e) } className="w-4/6 h-12 gap-2 flex items-center ml-4 rounded-full focus:bg-white relative">
              <button title="search"className="ml-2 absolute left-2"><SearchIcon /></button>
              <input type="text" placeholder="Buscar imagenes" className="w-4/5 h-10 px-10 bg-gray-200 outline-none ml-2 text-lg text-gray-600 rounded-full focus:bg-white focus:border-gray-500 focus:border-2" name="searchbar" value={input} onChange={(e) => handleChange(e)} />
          </form>
    )
}

export default Searchbar