import React, { useMemo } from "react";
import data from "../spotify_data.history.json";
import Styles from "./pages/EstatisticaStyles.module.css";

export const PeakListeningTime = () => {
  const getPeakListeningHour = () => {
    const hourCount = {};

    data.forEach((item) => {
      const date = new Date(item.ts);
      const hour = date.getHours();
      hourCount[hour] = (hourCount[hour] || 0) + item.ms_played;
    });

    let maxHour = 0;
    let maxPlayTime = 0;

    for (const hour in hourCount) {
      if (hourCount[hour] > maxPlayTime) {
        maxHour = hour;
        maxPlayTime = hourCount[hour];
      }
    }

    return maxHour;
  };

  const peakListeningHour = useMemo(() => getPeakListeningHour(), []);

  // Renderizar o componente
  return (
    <div>
      <p className={Styles.statDif}>{peakListeningHour}h</p>
    </div>
  );
};
