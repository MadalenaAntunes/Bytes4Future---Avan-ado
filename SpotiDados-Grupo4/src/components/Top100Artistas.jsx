import data from '../spotify_data.history.json';
import React, { useMemo, useState } from 'react';
import { ArtistDetails } from './Artista-Req';
import "./PopUp.css"

export const TopArtists = () => {
  const getArtistPlayCount = () => {
    const artistPlayCount = data.reduce((counts, record) => {
      const artist = record.master_metadata_album_artist_name;
      counts[artist] = (counts[artist] || 0) + 1;
      return counts;
    }, {});

    const artistsArray = Object.entries(artistPlayCount);
    const topArtists = artistsArray
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100)
      .map(([artistName, playCount]) => ({ artistName, playCount }));

    return topArtists;
  };

const topArtists = useMemo(() => getArtistPlayCount(), []);

  const [selectedArtist, setSelectedArtist] = useState(null); 
  const handleArtistClick = (artistName) => {
    setSelectedArtist(artistName); 
  };

  return (
    <div style={{display: "flex"}}>
      <div>
      {topArtists.map(({ artistName, playCount }, index) => (
        <div key={index} style={{display: "flex", marginBottom:"14px"}}>
          <b style={{fontSize: "16px", alignSelf: "center"}}>#{index + 1}</b>
          <div style={{marginLeft: "50px"}}>
            <p onClick={() => handleArtistClick(artistName)} style={{fontSize: "14px"}}>{artistName}</p>
            <p style={{fontSize: "11px"}}>{playCount} reproduções • {(playCount / data.length * 100).toFixed(2)}%</p>
          </div>
        </div> 
      ))}
      </div>
      <div>
      {selectedArtist && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedArtist(null)}>&times;</span>
            <ArtistDetails artistName={selectedArtist} />
          </div>
        </div>
      )}
      </div>
    </div>
  );
};