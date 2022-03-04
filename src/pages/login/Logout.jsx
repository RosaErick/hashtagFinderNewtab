import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Logout component
const LogOut = (props) => {
    //Getting navigate to use on set userSigned to false
    const navigate = useNavigate();

    useEffect(() => {
        //Setting user signed to false and redirect to home page
        props.setSigned(false);
        navigate("/");
    }, [props, navigate]);
    return (null)
}

export default LogOut;