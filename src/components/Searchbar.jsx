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
        navigate(`/photo/${input}`)
        setInput("")
    }

    return (
          <form onSubmit={(e) => handleSubmit(e) } className="bg-gray-200 w-4/6 h-12 gap-2 flex items-center ml-4 rounded-full focus:bg-white">
              <button title="search"className="ml-2"><SearchIcon /></button>
              <input type="text" placeholder="search" className="w-4/5 h-10 bg-gray-200 border-none outline-none ml-2 text-lg text-gray-600" name="searchbar" value={input} onChange={(e) => handleChange(e)} />
          </form>
    )
}

export default Searchbar