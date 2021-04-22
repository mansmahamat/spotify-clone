import React, {useState, useEffect} from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import './Player.scss';

export default function Player({ accessToken, trackUri }) {

    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null;
  return (
    <div className="player">
      <SpotifyPlayer
      styles={{
        activeColor: '#1cb954',
        bgColor: '282828',
        color: '#b3b3b3',
        loaderColor: '#b3b3b3',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#b3b3b3',
      }}
      playerPosition="top"
      token={accessToken}
      showSaveIcon
      initialVolume={0.2}
      play={play}
      callback={state => {
          if(!state.isPlaying) setPlay(false);
      }}
      uris={trackUri ? [trackUri] : []}
    />
    </div>
  );
}
