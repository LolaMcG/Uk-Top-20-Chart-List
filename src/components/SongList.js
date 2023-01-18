import React from "react";
import SongItem from "./SongItem";

const SongList = ({songsAsAProp}) => {
    const listOfMappedSongs = songsAsAProp.map((songAsAProp) => {
        return <SongItem songAsAProp={songAsAProp} key={songAsAProp.index}/>
    })

    return (
        <div>
            <ol type="1">
                {listOfMappedSongs}
            </ol>
        </div>
    )
}

export default SongList;