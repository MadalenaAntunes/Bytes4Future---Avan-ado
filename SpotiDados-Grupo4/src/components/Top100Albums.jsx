import React, { useMemo } from "react";
import data from "../spotify_data.history.json";

export const TopAlbums = () => {
  const getAlbumPlayTimes = () => {
    const albumPlayTimes = data
      .filter((record) => record.master_metadata_album_album_name)
      .reduce((times, record) => {
        const album = record.master_metadata_album_album_name;
        times[album] = (times[album] || 0) + record.ms_played;
        return times;
      }, {});

    const albumsArray = Object.entries(albumPlayTimes);
    const topAlbums = albumsArray
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100)
      .map(([albumName, playTime]) => ({ albumName, playTime }));

    return topAlbums;
  };

  const topAlbums = useMemo(() => getAlbumPlayTimes(), []);

  return (
    <div>
      <ul className="albums">
        {topAlbums.map(({ albumName, playTime }, index) => (
          <li key={index}>
            <div style={{display: "flex", flexDirection: "column", marginBottom: "12.5px", marginLeft: "40px"}}>
            <p style={{fontSize: "14px"}}>{albumName}</p>
            <p style={{fontSize: "11px", marginTop: "1px"}}>{Math.round(playTime / 1000 / 60)} minutos</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );  
};

