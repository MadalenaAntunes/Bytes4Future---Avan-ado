import data from "./spotify_data.history.json";
import "./App.css";

import React, { useMemo, useState } from "react";
import { ArtistPlayCount } from "./components/Top100Artistas"; // top 100 artistas
import { AlbumPlayTimes, TopAlbums } from "./components/Top100Albums"; // top 100 albums
import { TopTracks } from "./components/Top100musicas"; // top 100 musicas
import { MusicAnalytics } from "./components/PrimeirosReq"; // primeiros requisitos
import { PeakListeningTime } from "./components/HoraPico"; // hora mais ouvida
import { SeasonArtist } from "./components/SeasonPeak"; // qual estação ele mais ouviu o artista
import { ArtistDetails } from "./components/Artista-Req";
import { TopArtists } from "./components/Top100Artistas";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes, 
} from "react-router-dom"; // este é ROUTER para ter mais de uma página no projeto
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Estatisticas from "./components/pages/Estatisticas";
import { TopArtistsLast4Weeks } from "./components/Filtro4sem";
import { TopAlbumsLast4Weeks } from "./components/Filtro4sem";
import { TopTracksLast4Weeks } from "./components/Filtro4sem";
import { TopArtistsLast6Months } from "./components/Filtro6m";
import { TopAlbumsLast6Months } from "./components/Filtro6m";
import { TopTracksLast6Months } from "./components/Filtro6m";
import { TopArtistsLastYear } from "./components/Filtro1y";
import { TopAlbumsLastYear } from "./components/Filtro1y";
import { TopTracksLastYear } from "./components/Filtro1y";
import { TopArtistsAllTime } from "./components/FiltroInicio";
import { TopAlbumsAllTime } from "./components/FiltroInicio";
import { TopTracksAllTime } from "./components/FiltroInicio";
import imgNav from "./icons/Captura de ecrã 2024-05-03 115639.png"
import Styles from "./components/pages/EstatisticaStyles.module.css";


function App() {
  const [button, setButton] = useState(1);

  function handlerbutton(id) {
    setButton(id);
  }

  const [showLast4Weeks, setShowLast4Weeks] = useState(false);
  const [activeFunction, setActiveFunction] = useState('TopArtists');

  const handleClick = () => {
    setShowLast4Weeks(!showLast4Weeks); 
    if (activeFunction === 'TopArtists') {
      setActiveFunction('TopArtistsLast4Weeks');
    } else if (activeFunction === 'TopAlbums') {
      setActiveFunction('TopAlbumsLast4Weeks');
    } else if (activeFunction === 'TopTracks') {
      setActiveFunction('TopTracksLast4Weeks');
    }
  }

  const activeFunctionToCall = showLast4Weeks ? `${activeFunction}Last4Weeks` : activeFunction;
  
  const [showLast6Months, setShowLast6Months] = useState(false);
  const [actFunction, setActFunction] = useState('TopArtists');

  const handleClick2 = () => {
    setShowLast6Months(!showLast6Months); 
    if (actFunction === 'TopArtists') {
      setActFunction('TopArtistsLast6Months');
    } else if (actFunction === 'TopAlbums') {
      setActFunction('TopAlbumsLast6Months');
    } else if (actFunction === 'TopTracks') {
      setActFunction('TopTracksLast6Months');
    }
  }

  const actFunctionToCall = showLast6Months ? `${actFunction}Last6Months` : actFunction;
  
  const [showLastYear, setShowLastYear] = useState(false);
  const [activeFunction2, setActiveFunction2] = useState('TopArtists');

  const handleClick3 = () => {
    setShowLastYear(!showLastYear); 
    if (activeFunction2 === 'TopArtists') {
      setActiveFunction2('TopArtistsLastYear');
    } else if (activeFunction2 === 'TopAlbums') {
      setActiveFunction2('TopAlbumsLastYear');
    } else if (activeFunction2 === 'TopTracks') {
      setActiveFunction2('TopTracksLastYear');
    }
  }

  const activeFunctionToCall2 = showLastYear ? `${activeFunction2}LastYear` : activeFunction2;
  
  const [showAllTime, setShowAllTime] = useState(false);
  const [actFunction2, setActFunction2] = useState('TopArtists');

  const handleClick4 = () => {
    setShowAllTime(!showAllTime); 
    if (actFunction2 === 'TopArtists') {
      setActFunction2('TopArtistsAllTime');
    } else if (activeFunction === 'TopAlbums') {
      setActFunction2('TopAlbumsAllTime');
    } else if (actFunction2 === 'TopTracks') {
      setActFunction2('TopTracksAllTime');
    }
  }

  const actFunctionToCall2 = showAllTime ? `${actFunction2}AllTime` : actFunction2;

  return (
    <div className="App">
      <div>
        <Sidebar handler={handlerbutton} />
      </div>
      {button === 1 ? (
        <div className="wraperDad">
           <div className={Styles.login}>
              <img src={imgNav} alt="Login"></img>
           </div>
          <div className="header">
            <div>
              <h1>TOP 100</h1>
            </div>
            <div className="filters"> 
            <button className="fButtons" onClick={handleClick}>4 semanas</button>           
            
            <button className="fButtons" onClick={handleClick2}>6 meses</button>
             
            <button className="fButtons" onClick={handleClick3}>1 ano</button>            
            
            <button className="fButtons" onClick={handleClick4}>Sempre</button>            
            </div>
            <hr className="hrF"/>
          </div>
          <div className="wraperTop">
            <div className="smallDad">
              <div className="TopArtistas">
                <div>
                  <p className="pT">Top Artistas</p>
                  <hr className="hrP"/>
                </div>
                <TopArtists />
              </div>
              <div className="TopAlbuns">
                <div>
                  <p className="pT">Top Álbuns</p>
                  <hr className="hrP"/>
                </div>
                <TopAlbums />
              </div>
              <div className="TopTracks">
                <div>
                  <p className="pT">Top Músicas</p>
                  <hr className="hrP"/>
                </div>
                <TopTracks />
              </div>
            </div>
          </div>
        </div>
      ) : button === 2 ? (
        <div className="mainStats">
          <Estatisticas />
          </div>
      ) : button === 3 ? (
        <p>ESTAMOS NO 3</p>
      ) : (
        <></>
      )}
      

      <section className="wrapPage">
        <div
          className="Nav"
          style={{ width: "100%", background: "#040404", height: "50px" }}
        ></div>
        <div>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
