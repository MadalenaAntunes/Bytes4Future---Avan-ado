import { Link } from "react-router-dom";
import Estatistica from "./pages/Estatisticas";
import Styles from "./Styles.module.css";
import logoImg from "../icons/Spotify_Logo_RGB_White.png";
import home from "../icons/home.png"
import search from "../icons/search.png"
import lib from "../icons/Captura_de_Tela__102_-removebg-preview.png"
import playlist from "../icons/Captura de Tela (99).png"
import likedSongs from "../icons/Captura de Tela (100).png"
import podcasts from "../icons/Captura de Tela (101).png"
import statistics from "../icons/Captura_de_Tela__103_-removebg-preview.png"

export function Sidebar(props) {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.logoSpoti}>
        <img src={logoImg} alt="Logo" style={{width:"80px", marginLeft:"-60px"}} />
      </div>
      <div className={Styles.home}>
      <ul>
        <li>
          <img src={home} alt="Home" style={{width:"15px", height: "15px", marginRight:"10px"}} />
            Início
        </li>
        <li>
          <img src={search} alt="Search" style={{width:"15px", height: "15px", marginRight:"10px"}} />
            Procurar
        </li>
        <li>
          <img src={lib} alt="Library" style={{width:"16px", height: "15px", marginRight:"10px"}} />
            A tua Biblioteca
        </li>
      </ul>
      </div>
      <div className={Styles.playlist}>
      <ul>
        <li>
          <img src={playlist} alt="Playlist" style={{width:"15px", height: "15px", marginRight:"10px"}}/>
            Criar Playlist
        </li>
        <li>
          <img src={likedSongs} alt="Liked Songs" style={{width:"15px", height: "15px", marginRight:"10px"}}/>
            Músicas Curtidas
        </li>
        <li>
          <img src={podcasts} alt="Podcasts" style={{width:"15px", height: "15px", marginRight:"10px"}}/>
            Os teus Episódios
        </li>
      </ul>
      </div>
      <hr />
      <ul>
        <li>Jazz</li>
        <li>Hangover Cure</li>
        <li>Your Top Songs 2022</li>
        <li>Indie</li>
        <li>Rock</li>
        <li>RADAR</li>
        <li><button className={Styles.button} onClick={() => props.handler(1)}>TOP 100</button></li>
      </ul>
      <hr />
      <ul>
        <li>
            <button className={Styles.button} style={{margintop: "40px"}} onClick={() => props.handler(2)}><img src={statistics} alt="Statistics" style={{width:"15px", height: "15px", marginRight:"10px"}}/>Estatísticas</button>
        </li>
      </ul>
          <button className={Styles.btnPT}>Português</button>
          <p className={Styles.pFooter}>© 2024 SpotiDados</p>
      </div>
  );
}

export default Sidebar;
