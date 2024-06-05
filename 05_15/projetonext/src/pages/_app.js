import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";

//Alterações que fizeres a este ficheiro aplicam-se a todas as páginas
//É uma maneira alternativa de adicionar uma navbar ou de calcular um valor globalmente
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;

  //Se usares estas linhas, estás a dizer que todas as páginas são compostas pela navbar e a própria página (que aqui é chamada de Component)
  //Se usares esta opção, não tens que adicionar a navbar a todas as páginas.
  // return (
  //   <div>
  //     <Navbar />
  //     <Component {...pageProps}/>
  //   </div>
  // )
}
