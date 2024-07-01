import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../redux/action";
import CardUser from "../components/CardUser";
import PhotoIcon from "../components/icons/PhotoIcon";
import UserPhotos from "../components/UserPhotos";
import UsersIcon from "../components/icons/UsersIcon";
import HeartIcon from "../components/icons/HeartIcon";

function UserDetail() {
    const { username } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(getUser(username))
    }, [dispatch])

    return (
        <div className="mt-32 w-full flex flex-col items-center">
            <CardUser user={user}/>
            <div className="flex w-full px-6 mt-24 gap-6">
                <button className="flex py-1 gap-2 text-gray-500 font-medium hover:text-black border-b-2">
                    <PhotoIcon />
                    <p className="">Fotos</p>
                </button>
                <button className="flex py-1 gap-2 text-gray-500 hover:text-black font-medium">
                    <HeartIcon strokeWidth={1.5} fill={"none"}/>
                    <p className="">{user.total_likes} Me Gustas</p>
                </button>
                <button className="flex py-1 gap-2 text-gray-500 hover:text-black font-medium">
                    <UsersIcon />
                    <p className="">{user.followers_count} Seguidores</p>
                </button>
            </div>
            <UserPhotos username={user.username}/>
        </div>
    )
}

export default UserDetail;