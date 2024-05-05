import SearchIcon from "./icons/SearchIcon"

function Searchbar () {
    return (
          <div className="bg-gray-200 w-4/6 h-12 gap-2 flex items-center ml-4 rounded-full">
              <button title="search"className="ml-2"><SearchIcon /></button>
              <input type="text" placeholder="search" className="w-4/5 h-10 bg-gray-200" />
          </div>
    )
}

export default Searchbar