import data from "../spotify_data.history.json";
export const TopTracks = () => {
  const getTopTracks = () => {
    const trackPlayTimes = {};

    data?.forEach((item) => {
      const trackName = item?.master_metadata_track_name;
      trackPlayTimes[trackName] =
        (trackPlayTimes[trackName] || 0) + (item?.ms_played || 0);
    });

    const sortedTracks = Object.entries(trackPlayTimes)
      .sort((a, b) => b[1] - a[1])
      .filter((entry) => entry[1] > 0)
      .map(([trackName, playTime]) => ({ trackName, playTime }));

    return sortedTracks.slice(1, 101);
  };

  const topTracks = getTopTracks();

  return (
    <div>
      {topTracks.map(({ trackName, playTime }, index) => (
        <p key={trackName}>
          <div style={{display: "flex", flexDirection: "column", marginLeft: "80px", marginBottom: "-1.2px"}}>
          <p style={{fontSize: "14px"}}>{trackName}</p> 
          <p style={{fontSize: "11px", marginTop: "1px"}}>{Math.round(playTime / 600000)} minutos</p>
          </div>
        </p>
      ))}
    </div>
  );
};

