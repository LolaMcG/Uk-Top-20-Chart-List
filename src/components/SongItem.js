import React from "react";

const SongItem = ({songAsAProp}) => {

    return (
        <li>
            <h2>
                {songAsAProp["im:name"]["label"]}
            </h2>
            <h3>
                {songAsAProp["im:artist"]["label"]}
            </h3>
        </li>
    )
}

export default SongItem