import React from "react";

const SongItem = ({title, artist, image}) => {

    return (
        <li>
            <h2>
                {title}
            </h2>
            <img
                src={image}>
            </img>
            <h3>
                {artist}
            </h3>
        </li>
    )
}

export default SongItem