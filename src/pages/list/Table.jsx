import React from "react";
import AirtableGETBuscas from '../../api/AirtableGETBuscas';

//CSS imports
import '../../css/Global.css';
import '../../css/list.css';

const Table = () => {
    // container element
    return (
        // creating List Element
        <div className="ListTable">
            {/* Creating list Columns */}
            <div className="ListColumns">
                <p className="hashTagColumn">Hashtag</p>
                <p className="dateColumn">Data</p>
                <p className="hourColumn">Hora</p>
            </div>

            {/* Calling Airtable component that will be returning rows list */}
            <AirtableGETBuscas />
        </div>
    )
}

export default Table;