import React from "react";
import Navbar from "../../components/Navbar";
import logIcon from "../../assets/img/icon-home.svg";
import logoutIcon from "../../assets/img/icon-power-off.svg";

//Components imports
import Table from "./Table";

//CSS imports
import '../../css/Global.css';
import '../../css/list.css';

const List = () => {
    return (
        <div className="ListMain">
            <Navbar buttons={
                [
                    {
                        "title": "Home",
                        "icon": logIcon,
                        "route": "/",
                        "backgroundColor": "#72EFDB",
                        "textColor": "#0A1744"
                    },
                    {
                        "title": "Sair",
                        "icon": logoutIcon,
                        "route": "/logout",
                        "backgroundColor": "#0A1744",
                        "textColor":
                            "#FFF"
                    }
                ]
            } />
            <div className="ListContainer">
                <h1 className="ListTitle">Buscas realizadas</h1>
                <Table />
            </div>
        </div>
    )
}

export default List;