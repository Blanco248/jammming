import React from "react";
import "./TrackList.css"
import Track from "./Track";

export default class Tracklist extends React.Component {
    render () {
        return (
            <div className="TrackList">
                {/* {map method of track} */}
                {this.props.tracks.map((song) => {
                    return <Track key={song.id} track={song} />
                })}
            </div>
        )
    }
}