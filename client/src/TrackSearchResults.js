import React from "react";
import { ReactComponent as Play } from './assets/play.svg'
import "./search.scss";

export default function TrackSearchResults({accessToken,music,   track, chooseTrack, searchResults, spotifyApi }) {
    
  function handlePlay() {
    chooseTrack(track);
  }




  return (
    
        // {/* {track.artist}
        //     <img src={track.albumUrl} alt="yes" />
        //     {track.title}
        //     <img src={track.bigAlbumImage} alt="yes" /> */}

        <div className="card">
          <div className="cardImage">
            <img src={track.albumUrl} alt="Pic 1" />
          </div>
          <div className="cardContent">
            <h3>{track.title}</h3>
            <span>{track.artist}</span>
          </div>
          <span onClick={handlePlay} className="play">
              <Play />
          </span>
        </div>
  
  );
}
