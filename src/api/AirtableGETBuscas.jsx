import React from "react";
import { useState, useEffect } from "react";
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'key2CwkHb0CKumjuM' }).base('app6wQWfM6eJngkD4');

function AirtableGETBuscas() {
    const [searchList, setSearchList] = useState([]);

    function log(){
        console.log(searchList)
    }

    useEffect(() => {
        base('Buscas').select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 3,
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
                console.log(record)
                setSearchList([...searchList, {
                    "Hashtag": record.get("Hashtag")
                }])
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [])
    return (
        <div className="ListRow">
            <p className="RowHashtagName">#hashtagname</p>
            <p className="RowDate">25/02</p>
            <p className="HourDate">09:30</p>
            <button onClick={log}>logar</button>
        </div>
    )
}

export default AirtableGETBuscas;