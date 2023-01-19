import React from "react";
import SongItem from "./SongItem";

const SongList = ({songsAsAProp}) => {
    const listOfMappedSongs = songsAsAProp.map((songAsAProp) => {
        return <SongItem title={songAsAProp["im:name"]["label"]} artist={songAsAProp["im:artist"]["label"]} image={songAsAProp["im:image"][1]["label"]}/>
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