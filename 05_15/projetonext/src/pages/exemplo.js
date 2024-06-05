import { Navbar } from "@/components/Navbar";
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify";

//CSS Das notificações
import 'react-toastify/dist/ReactToastify.css';

//Neste ficheiro temos outra página, neste caso, "/exemplo"
export default () => {
    const [state, setState] = useState({ email: "", password: "" });
    const [showingPassword, setShowing] = useState(false)

    //Funções de notificação
    //https://www.npmjs.com/package/react-toastify
    //https://fkhadra.github.io/react-toastify/introduction/
    const notifySuccess = () => toast("Formulário submetido com sucesso!");
    const notifyError = () => toast.error("Dados incorretos, volte a tentar!");
    const notifyErrorEmail = () => toast.error("E-mail tem que incluir um @!");

    const handleSubmit = async (e) => {

        //Para não recarregar a página quando o formulário é submetido
        e.preventDefault()

        //Pedido ao backend, abre o ficheiro "/pages/api/form.js" para ver o que faz
        const res = await fetch("/api/form", {
            method: "POST",

            //O header content-type serve para indicar ao backend que vamos enviar um json
            headers: {
                "Content-Type": "application/json"
            },
            //Neste caso enviamos diretamente o state, que é um objeto
            body: JSON.stringify(state)
        })
        if (res.status === 200) {
            notifySuccess()
        } else if (res.status === 400) {
            notifyErrorEmail()
        } else {
            notifyError()
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setState(ps => ({ ...ps, [e.target.name]: e.target.value }))
    }
    return (
        <div className="flex">
            <Navbar />
            <div className="flex flex-col items-center gap-2">
                <h1>Exemplo (Formulário)</h1>
                <div className="w-3/4 bg-slate-400 p-4 rounded-md">
                    <p>Tenta submeter o formulário</p>
                    <p>O Formulário funciona se a base de dados que é mencionada em ".env (DB_NAME)" tiver uma coleção "users" com um documento com email e password</p>
                </div>
                <form className="bg-slate-700 rounded-lg w-fit h-fit p-14 flex flex-col gap-2"

                    onSubmit={handleSubmit}>
                    <span>
                        <input
                            className="text-black bg-slate-300 p-1 rounded-md"
                            name="email"
                            type="email"
                            value={state.email}
                            onChange={handleChange} />
                    </span>

                    <span>
                        <input
                            className="text-black bg-slate-300 p-1 rounded-md"
                            name="password"
                            type={showingPassword ? "text" : "password"}
                            value={state.password}
                            onChange={handleChange} />
                        <button type="button"
                            onMouseDown={() => setShowing(true)}
                            onMouseUp={() => setShowing(false)}
                        >
                            👀
                        </button>
                    </span>

                    <button type="submit">
                        Submeter
                    </button>
                </form>
            </div>

            {/* Necessário para que as notificações funcionem */}
            <ToastContainer />
        </div>
    )
}