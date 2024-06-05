import Image from "next/image";

//Para adicionar uma fonte da google, é só importar
import { Fira_Code } from "next/font/google";
import { Navbar } from "@/components/Navbar";


//E guardar numa constante, para adicionar a fonte a um elemento vê a linha 15
//Para mais informação: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
const roboto = Fira_Code({ subsets: ["latin"], weight: "700" });


//Todos os ficheiros que ficarem dentro da pasta "pages" vão ser tratados como um link.
//Se criares o ficheiro "/pages/exemplo.js" (ou .jsx) e exportares por default um componente, esse componente vai ser tratado como uma página.

//Para criares paginas dinamicas (/pages/[nome].js), vai a https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes

//Neste caso, este é o ficheiro "/pages/index.js", que pode ser transformado no url "http://localhost:3000/", (e o ficheiro "/pages/exemplo.js" é transformado no url "http://localhost:3000/exemplo")
export default function Home() {

  return (
    <main
      className={`flex min-h-screen
        ${roboto.className}`}
    >


      <Navbar />
      <div>
        <h1>HOMEPAGE</h1>
      </div>

    </main>
  );
}
