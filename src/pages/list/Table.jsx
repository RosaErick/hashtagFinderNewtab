import React from "react";

//CSS imports
import '../../css/Global.css';
import '../../css/list.css';

const Table = () => {
    return (
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
            </div>
    )
}

export default Table;