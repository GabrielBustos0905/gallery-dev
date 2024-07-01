
function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 ">
            <div className="w-full mx-auto p-4 flex items-center justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Gabriel Bustos</a>. All Rights Reserved.
            </span>
            <ul className="flex justify-center items-center ml-4  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a target="_blank" rel="noopener" href="https://662b022b93e33c46c2f90030--regal-tulumba-07d207.netlify.app/" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="mailto:gabrielbustos0905@gmail.com" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>

    )
}

export default Footer