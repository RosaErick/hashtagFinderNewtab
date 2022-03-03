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
            
            {/* This element is used to track when user scrolled to end of div.
             Must be used IntersectionObserver with this element.
             You can see the Observer Logic in <AirtableGETBuscas /> component */}
            <div id="loaderRef"></div>
        </div>
    )
}

export default Table;