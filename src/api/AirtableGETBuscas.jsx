import React from "react";
import { useState, useEffect, useRef } from "react";

//import enviroments variables from json Object.
import process from '../api/env.json';

//importing airtable package
var Airtable = require('airtable');

//authenticating and passing base to airtable API
var base = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY }).base(process.env.AIRTABLE_BASE);

//Main function to return component
function AirtableGETBuscas() {

    //creating searchList to return rows based in this Array
    const [searchList, setSearchList] = useState([]);

    /*with some experiences using Airtable fetchNextPage() function with IntersectionObserver, sometimes
    we have unexpected  behaviors like multiple fetchNextPage() called. This is a useRef to control and
    help prevent this unexpected behavior*/
    const canFetchNextPage = useRef();
    canFetchNextPage.current = true;

    //useEffect with request api to prevent looping call
    useEffect(() => {
        base('Buscas').select({
            // Selecting the first 3 records in Grid view
            view: "Grid view",
            //Formula to return only from specific squad
            filterByFormula: "{Squad}=150222",
        }).eachPage(function page(records, fetchNextPage) {
            //array to concat with searchList state
            let recordsList = [];

            //forEach on records and adding on recordList array
            records.forEach(function (record) {
                console.log(record);
                recordsList.push({
                    "Hashtag": record.get("Hashtag"),
                    "Data": record.get("Data"),
                    "Hora": record.get("Hora"),
                });
            });
            
            /* This is one more step to prevent the unexpected behavior previously mentioned
            Will only update the state element if canFetchNextPage ref is equals true
            */
            if(canFetchNextPage.current){
                setSearchList(oldArray => oldArray.concat(...recordsList));
            };

            // Options to observer Intersection, rootMargin to intersection with margin of 20px
            const options = {
                root: null,
                rootMargin: "20px",
                threshold: 1.0
            };

            /*creating a observer with interSectionObserver, to track when user scrolled to end of page.
            Is using the div "loaderRef" as reference to observer*/
            const observer = new IntersectionObserver((entities) => {
                const target = entities[0];
                if (target.isIntersecting && canFetchNextPage.current) {
                    fetchNextPage();
                    //one more step to prevent multiple calls on fetchNextPage();
                    observer.disconnect();
                }
            }, options);

            //adding Observer to "loaderRef" element.
            if (document.getElementById("loaderRef")) {
                observer.observe(document.getElementById("loaderRef"));
            }

        }, function done(err) {
            if (err) { console.error(err); return; }
            //this function is called when fetchNextPage() reach the last page, so we set canFetchNextPage to false;
            canFetchNextPage.current = false;
        });
    }, [])

    //Mapping the searchList state and return rows
    return searchList.map((search, index) => {
        return (
            <div key={index} className="ListRow">
                <p className="RowHashtagName">{search["Hashtag"]}</p>
                <p className="RowDate">{search["Data"]}</p>
                <p className="HourDate">{search["Hora"]}</p>
            </div>
        )
    });
}

export default AirtableGETBuscas;