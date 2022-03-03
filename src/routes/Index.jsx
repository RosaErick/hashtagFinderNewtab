import { useContext } from "react";
import Context from "../contexts/Context";
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from "./PublicRoutes";


function Routes(){

    const { signed } = useContext(Context);

    //if signed is true, user may access exlusive routes. Otherwise, only public ones
    return signed ? (<ProtectedRoutes /> && < PublicRoutes/>) : <PublicRoutes /> 
}

export default Routes;