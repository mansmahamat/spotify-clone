import React, {useState, useEffect} from 'react';
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResults from './TrackSearchResults';
import Player from './Player';
import Header from './Header';

import './Dashboard.scss'


const spotifyApi = new SpotifyWebApi({
    clientId: '39c957640b2940bc9b1ca9322bf20062'
})


export default function Dashboard({code}) {

    const [search, setSearch] = useState('')
    const [user, setUser] = useState()
    const [searchResults, setSearchResults] = useState([])
    const [initialResults, setInitialResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const accessToken = useAuth(code)

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch('')
    }



    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken);

        spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data.body);
    setUser(data.body)
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  spotifyApi.searchTracks('acoustic')
  .then((res) => {
    setInitialResults(res.body.tracks.items.map(track => {
      
      return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images[1].url,
          bigAlbumImage: track.album.images[0].url
      }
  }))
  }, function(err) {
    console.error(err);
  });


    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then((res) =>{
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: track.album.images[1].url,
                    bigAlbumImage: track.album.images[0].url
                }
            }))
        })
        return () => cancel = true
    }, [search, accessToken])

    return (
        <div className="dashboard__container">
          <div className="dashboard">
<div>
                <Header search={search} setSearch={setSearch} user={user} />
            </div>

            
        

            <div className="cardsWrap">
      <div className="cardsWrapInner" >
     {searchResults.map(track => (
        <TrackSearchResults accessToken={accessToken} spotifyApi={spotifyApi} searchResults={searchResults} track={track} user={user} chooseTrack={chooseTrack} key={track.uri} />
    ))} 

    {searchResults.length === 0 && initialResults.map(track => (
        <TrackSearchResults accessToken={accessToken} spotifyApi={spotifyApi} searchResults={searchResults} track={track} user={user} chooseTrack={chooseTrack} key={track.uri} />
    )) }

    </div>
    </div>
          </div>
            

       <Player  accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
    )
}
