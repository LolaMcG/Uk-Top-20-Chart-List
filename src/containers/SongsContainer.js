import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SongList from "../components/SongList";

const SongsContainer = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetchSongs();
    }, []) 

    const fetchSongs = function() {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(response => response.json())
        .then(songs => setSongs(songs["feed"]["entry"]))
    }

    return (
        <div>
            <HeaderComponent title="Check Out the Current UK Top 20!"/>
            <SongList songsAsAProp={songs}/>
        </div>
    )
}

export default SongsContainer