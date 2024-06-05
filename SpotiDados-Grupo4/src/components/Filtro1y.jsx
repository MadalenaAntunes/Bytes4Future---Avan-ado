import React, { useState } from "react";

// Top 100 melhores artistas ordenados pelo total de reproduções nos últimos 12 meses
export const TopArtistsLastYear = () => {
  const data = require("../spotify_data.history.json");

  const currentDate = new Date(); 
  const twelveMonthsAgo = new Date(); 
  twelveMonthsAgo.setMonth(currentDate.getMonth() - 12);

  const artistPlayTimes = data
    .filter((item) => new Date(item.ts) > twelveMonthsAgo)
    .filter((item) => item.master_metadata_album_artist_name)
    .reduce((times, item) => {
      const artist = item.master_metadata_album_artist_name;
      times[artist] = (times[artist] || 0) + item.ms_played;
      return times;
    }, {});

  const artistsArray = Object.entries(artistPlayTimes);

  const topArtists = artistsArray
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([artistName, playTime]) => ({ artistName, playTime }));

  return (
    <div>
      <ul>
        {topArtists.map(({ artistName, playTime }, index) => (
          <li key={index}>
            <p>{artistName}</p>
            <p>{Math.round(playTime / 60000)} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Top 100 melhores faixas (músicas) ordenadas pelo tempo de escuta nos últimos 12 meses
export const TopTracksLastYear = () => {
  const data = require("../spotify_data.history.json");

  const currentDate = new Date(); 
  const twelveMonthsAgo = new Date(); 
  twelveMonthsAgo.setMonth(currentDate.getMonth() - 12);

  const trackPlayTimes = data
    .filter((item) => new Date(item.ts) > twelveMonthsAgo)
    .filter((item) => item.master_metadata_track_name)
    .reduce((times, item) => {
      const trackName = item.master_metadata_track_name;
      times[trackName] = (times[trackName] || 0) + item.ms_played;
      return times;
    }, {});

  const tracksArray = Object.entries(trackPlayTimes);

  const topTracks = tracksArray
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([trackName, playTime]) => ({ trackName, playTime }));

  return (
    <div>
      <ul>
        {topTracks.map(({ trackName, playTime }, index) => (
          <li key={index}>
            <p>{trackName}</p>
            <p>{Math.round(playTime / 60000)} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Top 100 melhores álbuns ordenados pelo tempo de escuta nos últimos 12 meses
export const TopAlbumsLastYear = () => {
  const data = require("../spotify_data.history.json");

  const currentDate = new Date(); 
  const twelveMonthsAgo = new Date(); 
  twelveMonthsAgo.setMonth(currentDate.getMonth() - 12);

  const albumPlayTimes = data
    .filter((item) => new Date(item.ts) > twelveMonthsAgo)
    .filter((item) => item.master_metadata_album_album_name)
    .reduce((times, item) => {
      const album = item.master_metadata_album_album_name;
      times[album] = (times[album] || 0) + item.ms_played;
      return times;
    }, {});

  const albumsArray = Object.entries(albumPlayTimes);

  const topAlbums = albumsArray
    .sort((a, b) => b[1] - a[1])
    .slice(0, 100)
    .map(([albumName, playTime]) => ({ albumName, playTime }));

  return (
    <div>
      <ul>
        {topAlbums.map(({ albumName, playTime }, index) => (
          <li key={index}>
            <p>{albumName}</p>
            <p>{Math.round(playTime / 60000)} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
