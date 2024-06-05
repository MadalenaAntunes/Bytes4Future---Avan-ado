import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../Sidebar";
import {
  getTotalPlays,
  getUniqueTracks,
  getTotalPlayTime,
  getAverageDailyPlayTime,
} from "../DadosGerais";
import Styles from "./EstatisticaStyles.module.css";
import { TopArtistsAllTime } from "../FiltroInicio";
import data from "../../spotify_data.history.json";
import { estacaoDoAno } from "../SeasonPeak";
import { PeakListeningTime } from "../HoraPico";
import imgNav from "../../icons/Captura de ecrã 2024-05-03 115639.png"
import profilePic from "../../icons/man-taking-selfie.jpg"

function Estatisticas() {
  return (
    <div className={Styles.container}>
      <div className={Styles.login}>
      <img src={imgNav} alt="Login"></img>
      </div>
      <div>
        <div className={Styles.hiRaj}>
        <img src={profilePic} alt="Profile Pic" className={Styles.profPic}></img>
        <h2>Olá, <br/> Rajarshi B.</h2>
        <h2 className={Styles.trad}>
          Traduzimos sua playlist em números. <br/> Agora só falta apertar o play!
        </h2>
        </div>
        <div className={Styles.cardTitle}>
          <h3>AS MINHAS ESTATÍSTICAS</h3>
        </div>

        <div className={Styles.cardsTop}>
          <div className={Styles.cardPlays}>
            <p className={Styles.títuloDif}>Total de Reproduções</p>
            <p className={Styles.statDif}>{getTotalPlays(data)}</p>
          </div>
          <div className={Styles.cardDifSongs}>
            <p className={Styles.títuloDif}>Faixas Diferentes</p>
            <p className={Styles.statDif}>{getUniqueTracks(data)}</p>
          </div>
          <div className={Styles.cardTotalPlays}>
            <p className={Styles.título}>Tempo Total de Reproduções</p>
            <p className={Styles.stat}>{getTotalPlayTime(data)} horas</p>
          </div>
        </div>

        <div className={Styles.cardsBottom}>
          <div className={Styles.cardDateTime}>
            <p className={Styles.título}>Horário Preferido</p>
            <PeakListeningTime/>
          </div>
          <div className={Styles.cardSeason}>
            <p className={Styles.título}>Estação do Ano Preferido</p>
            <p className={Styles.stat}>{estacaoDoAno(data)}</p>
          </div>
          <div className={Styles.cardAvarage}>
            <p className={Styles.título}>Média Diária de Reproduções</p>
            <p className={Styles.stat}>{getAverageDailyPlayTime(data)} minutos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estatisticas;
