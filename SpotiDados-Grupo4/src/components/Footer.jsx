import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import { ReactComponent as Player } from '../icons/music-player-transparent-animation-4k-free-video.svg';
import song from "../icons/Captura de Tela (94).png"
import songPlay from "../icons/Captura de Tela (93).png"
import songVolume from "../icons/Captura de Tela (95).png"


export function Footer() {
  return <div className={Styles.footer}>
    <img src={song} alt="song" style={{height: "60px", marginLeft: "-380px"}}></img>
    <img src={songPlay} alt="play button" style={{height: "60px"}}></img>
    <img src={songVolume} alt="volume" style={{height: "60px"}}></img>
    </div>;
}

export default Footer;
