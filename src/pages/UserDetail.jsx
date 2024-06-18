import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../redux/action";

function UserDetail() {
    const { username } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    
    useEffect(() => {
        dispatch(getUser(username))
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}

export default UserDetail;