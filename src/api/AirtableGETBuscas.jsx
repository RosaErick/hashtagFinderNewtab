import React from "react";
import { useState, useEffect, useRef } from "react";

//Importing Loader
import LoaderComponent from "../components/Loader";

//importing enviroments variables from json Object.
import process from '../api/env.json';

//importing airtable package
var Airtable = require('airtable');

//authenticating and passing base to airtable API
var base = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY }).base(process.env.AIRTABLE_BASE);

//Function to formate Date and Hour
function formateTimestamp(timestamp) {
    //If have timestamp, format and return object with date and hour formatted.
    if (timestamp) {
        //Defining date with timestamp parameter on table
        const date = new Date(timestamp);

        //adding a 0 before of day and month, to workaround issue of months return without 0 on the start.
        /*.slice(-2) will return the last 2 characters of a string. Always a month or day will have a maximum of 2 digits.
        So, we add a 0 before string, and if string has a total of 2 elements, will return the 2 elements. But if string has
        a total of 3 digits, like 012(to december month) the .slice(-2); will get the last 2 number "12". The same thing works to days, hours and minutes*/
        const day = `0${date.getDate()}`.slice(-2);
        const month = `0${date.getMonth() + 1}`.slice(-2);

        const hour = `0${date.getHours()}`.slice(-2);
        const min = `0${date.getMinutes()}`.slice(-2);

        //Returning the final object
        return {
            data: `${day}/${month}`,
            hora: `${hour}:${min}`
        }
    }
    //If not have Timestamp parameter, return a object with default value to sinalize no date time on table.
    else{
        return {
            data: `SEM HORA`,
            hora: `SEM DATA`
        }
    }
}

    //Main function to return component
    function AirtableGETBuscas() {

        //creating searchList to return rows based in this Array
        const [searchList, setSearchList] = useState([]);
        const [loading, setLoading] = useState(true);

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
                //Sort to GET result by descending order, or last from first added elements to table.
                sort: [{ field: "Data", direction: "desc" }]
            }).eachPage(function page(records, fetchNextPage) {
                //array to concat with searchList state
                let recordsList = [];

                //forEach on records and adding on recordList array
                records.forEach(function (record) {
                    recordsList.push({
                        "Hashtag": record.get("Hashtag"),
                        "Data": record.get("Data"),
                    });
                });

                /* This is one more step to prevent the unexpected behavior previously mentioned
                Will only update the state element if canFetchNextPage ref is equals true
                */
                if (canFetchNextPage.current) {
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
        return (searchList.map((search, index) => {
            //calling function to format and return object with row timestamp
            let rowDate = formateTimestamp(search["Data"]);
            return (
                <div key={index} className="ListRow">
                    <p className="RowHashtagName">{search["Hashtag"]}</p>
                    <p className="RowDate">{rowDate.data}</p>
                    <p className="HourDate">{rowDate.hora}</p>
                </div>
            )
        }));
    }

    export default AirtableGETBuscas;