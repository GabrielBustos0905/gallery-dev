import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../redux/action";
import CardUser from "../components/CardUser";

function UserDetail() {
    const { username } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(getUser(username))
    }, [dispatch])

    return (
        <div className="mt-32">
            <CardUser user={user}/>
        </div>
    )
}

export default UserDetail;