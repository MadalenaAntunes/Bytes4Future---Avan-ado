import data from "../spotify_data.history.json";
import React, { useMemo } from "react";


export const ArtistDetails = ({ artistName }) => {
  const getArtistDetails = () => {
    const artistData = data.filter(
      (item) => item.master_metadata_album_artist_name === artistName
    );

    const totalPlays = artistData.length;
    const uniqueTracks = [
      ...new Set(artistData.map((item) => item.master_metadata_track_name)),
    ].length;
    const totalPlayTime = artistData.reduce(
      (total, item) => total + item.ms_played,
      0
    );

    const trackPlayTimes = {};
    artistData.forEach((item) => {
      const trackName = item.master_metadata_track_name;
      trackPlayTimes[trackName] =
        (trackPlayTimes[trackName] || 0) + item.ms_played;
    });
    const topTracks = Object.entries(trackPlayTimes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([trackName, playTime]) => ({ trackName, playTime }));

    return {
      totalPlays,
      uniqueTracks,
      totalPlayTime,
      topTracks,
    };
  };

  const { totalPlays, uniqueTracks, totalPlayTime, topTracks } = useMemo(
    () => getArtistDetails(),
    [artistName]
  );

  return (
    <div>
      <h3>{artistName}</h3>
      <p>Reproduções Totais</p>
      <p>{totalPlays}</p>
      <p>Tempo Total de Reprodução</p>
      <p>{Math.floor(totalPlayTime / 1000 / 60)} minutes</p>
      <p>Músicas Reproduzidas</p>
      <p>{uniqueTracks}</p>
      <p>Percentagem</p>
      <p>%</p>
      <hr/>
      <h4>Top 20 songs</h4>
      {topTracks.map(({ trackName, playTime }, index) => (
        <p key={trackName}>
          {index + 1}. {trackName}
        </p>
      ))}
    </div>
  );
};
