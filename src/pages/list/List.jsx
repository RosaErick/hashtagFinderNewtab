import React from "react";
import Navbar from "../../components/Navbar";
import '../../css/Global.css';
import '../../css/list.css';
import logIcon from "../../assets/img/icon-home.svg";
import logoutIcon from "../../assets/img/icon-power-off.svg";

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
                        "route": "/sair",
                        "backgroundColor": "#0A1744", 
                        "textColor": 
                        "#FFF"
                    }
                ]
                }/>
                
            <div className="ListContainer">
                <h1 className="ListTitle">Buscas realizadas</h1>

                <div className="ListTable">
                    <div className="ListColumns">
                        <p className="hashTagColumn">Hashtag</p>
                        <p className="dateColumn">Data</p>
                        <p className="hourColumn">Hora</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    {/* <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div>

                    <div className="ListRow">
                        <p className="RowHashtagName">#hashtagname</p>
                        <p className="RowDate">25/02</p>
                        <p className="HourDate">09:30</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default List;