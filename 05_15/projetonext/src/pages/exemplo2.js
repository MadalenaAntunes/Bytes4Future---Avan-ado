import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react"

//Neste ficheiro temos outra página, neste caso, "/exemplo2"
export default () => {
    //Para carregar informação do backend quando uma página carrega

    //Crias um state para guardar o valor
    const [data, setData] = useState(null);

    //Crias a função que carrega a informação e a guarda no state
    const fetchName = async () => {

        //Fazer um pedido ao backend e esperar pela resposta
        const res = await fetch("/api/hello")

        //Se a resposta for de sucesso
        if (res.status === 200) {
            //Lê os valores (o corpo) da resposta
            const json = await res.json()

            //Guarda
            setData(json)
        }
    }

    //Quando a página carrega
    useEffect(() => {

        //Carrega a informação do backend
        fetchName()
    }, [])

    return (
        <div className="flex">
            <Navbar />
            <div>
                <h1>Exemplo 2 (Carregar informação)</h1>

                {/* QUANDO SE CARREGA VALORES PELO BACKEND, SÓ OS PODEMOS USAR QUANDO ESTIVEREM DISPONÍVEIS */}
                {
                    data && <p>Hello {data.name}</p>
                }
            </div>
        </div>
    )
}