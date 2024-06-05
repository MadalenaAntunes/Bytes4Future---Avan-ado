import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import { useState } from "react"

export default () => {
    const [counter, setCounter] = useState(0)
    const router = useRouter()
    const params = useParams()

    const handleCounter = (value) => {
        setCounter(c => {
            const novoValor = c + value

            if(novoValor === 10) {
                router.push("/alunos/alfredo")
            }
            return novoValor
        })
    }

    return (
        <div>
            {
                params && <p>Ola aluno {params.nome}</p>
            }

            <button onClick={() => handleCounter(+1)}>
                +
            </button>
            {counter}
            <button onClick={() => handleCounter(-1)}>
                -
            </button>
        </div>
    )
}