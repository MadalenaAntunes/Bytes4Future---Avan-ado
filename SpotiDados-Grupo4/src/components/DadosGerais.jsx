// const getTotalPlays = (data) => data.length;
// const getUniqueTracks = (data) =>
//   new Set(data.map((item) => item.track_name)).size;
// const getTotalPlayTime = (data) =>
//   data.reduce((total, item) => total + item.ms_played, 0);

// const getAverageDailyPlayTime = (data) =>
//   getTotalPlayTime(data) / (365 * 24 * 60 * 60 * 1000);

const getTotalPlays = (data) => data.length;

const getUniqueTracks = (data) => {
  const allTracks = data.map((e) => e.master_metadata_track_name);
  return new Set(allTracks).size;
};

const getTotalPlayTime = (data) => {
  const totalMilliseconds = data.reduce(
    (total, item) => total + item.ms_played,
    0
  );
  const totalHours = totalMilliseconds / (60 * 60 * 1000);
  return Math.floor(totalHours);
};
const getTotalPlayTimeMinutes = (data) => {
  const totalMilliseconds = data.reduce(
    (total, item) => total + item.ms_played,
    0
  );
  const totalMinutes = totalMilliseconds / (60 * 1000);
  return Math.floor(totalMinutes);
};

const getTotalDaysAmount = (data) => {
  const ordered = data.toSorted(
    (a, b) => new Date(b.ts).valueOf() - new Date(a.ts).valueOf()
  );

  const mostRecent = new Date(ordered[0].ts).valueOf();
  const oldest = new Date(ordered[ordered.length - 1].ts).valueOf();
  const diffInMs = mostRecent - oldest;
  const diffInDays = diffInMs / (24 * 60 * 60 * 1000);

  return diffInDays;
};

const getAverageDailyPlayTime = (data) => {
  console.log(getTotalPlayTimeMinutes(data));
  const totalHours = getTotalPlayTimeMinutes(data) / getTotalDaysAmount(data);
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return hours;
};

export {
  getTotalPlays,
  getUniqueTracks,
  getTotalPlayTime,
  getAverageDailyPlayTime,
};
