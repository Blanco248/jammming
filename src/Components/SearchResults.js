import React from "react";
import "./SearchResults.css"
import Tracklist from "./Tracklist";

export default class SearchResults extends React.Component {
   render () {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {/* {Tracklist component} */}
            <Tracklist tracks={this.props.searchResults} />
        </div>
    )
   }

}