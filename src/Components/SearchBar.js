import React from "react";



export default function SearchBar() {
    return (
        <>
           <form>        
                <input id="search" defaultValue="Enter A Song Title"type="text" />
                <button value="Submit">Search</button>
           </form>
        </>
    )
}