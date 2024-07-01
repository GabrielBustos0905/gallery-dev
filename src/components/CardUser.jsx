import { Link } from "react-router-dom";
import CancelIcon from "./icons/CancelIcon";
import CheckIcon from "./icons/CheckIcon";
import DotsIcon from "./icons/DotsIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MailIcon from "./icons/MailIcon";
import MapPinIcon from "./icons/MapPinIcon";

function CardPhoto ({ user }) {

    return (
        <div className="flex flex-col items-center md:items-start md:flex-row w-[750px]">
            <div>
                <img src={user.profile_image?.large} alt="profile_image" className="rounded-full" />
            </div>
            <div className="ml-10 w-2/3 flex flex-col">
                <div className="flex">
                    <h2 className="font-bold text-4xl">{user.name}</h2>
                    <div className="flex h-10">
                        <button className="bg-blue-400 mx-3 p-2 rounded-md hover:bg-blue-300">
                            <p className="text-white font-medium">Contratar</p>
                        </button>
                        <button className="p-2 border rounded-md shadow-md hover:border-gray-400">
                            <MailIcon />
                        </button>
                        <button className="mx-2 p-1 border rounded-md shadow-md hover:border-gray-400">
                            <DotsIcon />
                        </button>
                    </div>
                </div>
                <h4 className="text-lg text-gray-700 mt-4">{user.bio}</h4>
                <div className="mt-6">
                    
                    {
                        user?.for_hire === true ? <div className="flex items-center">
                            <CheckIcon />
                            <p className="ml-2 text-blue-400">Listo para contratacion</p>
                        </div> :
                        <div className="flex items-center">
                            <CancelIcon />
                            <p className="ml-2 text-red-500">No disponible para contratacion</p>
                    </div>
                    }
                    <div className="my-3 flex items-center text-gray-600">
                        <MapPinIcon />
                        <p className="ml-2">{user.location}</p>
                    </div>
                    <Link to={`https://www.instagram.com/${user.social?.instagram_username}`}>
                        {
                            user.social?.instagram_username && <button className="flex items-center text-gray-600 hover:text-black">
                                    <InstagramIcon />
                                    <p className="ml-2">Instagram</p>
                            </button>
                        }
                    </Link>
                    <div className="mt-6">
                        <p className="text-lg">Intereses</p>
                        <div className="flex items-center gap-3 mt-2">
                            {
                                user.tags?.custom.map(tag => (
                                    <p className="bg-gray-200 p-1 text-gray-700 capitalize">{tag.title}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPhoto;