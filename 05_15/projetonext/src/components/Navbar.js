import { useRouter } from "next/router";
import Link from "next/link";



export function Navbar() {

    //O hook que usamos para navegar entre páginas (https://nextjs.org/docs/pages/api-reference/functions/use-router)
    //Em vez do hook useRouter, podemos usar o Link para navegar (https://nextjs.org/docs/pages/api-reference/components/link)
    const router = useRouter()

    return (
        <div className="flex flex-col w-fit bg-slate-400 h-screen gap-4 p-2">

            {/* NAVEGACAO COM LINK */}
            <Link href={"/"}>
                <button className="bg-slate-600 p-1 rounded-md hover:bg-slate-700">
                    Homepage
                </button>
            </Link>
            
            <Link href={"/exemplo"}>
                <button className="bg-slate-600 p-1 rounded-md hover:bg-slate-700">
                    Exemplo
                </button>
            </Link>

            {/* NAVEGACAO COM ROUTER */}
            <button className="bg-slate-600 p-1 rounded-md hover:bg-slate-700"
                onClick={() => router.push("/exemplo2")}>
                Exemplo2
            </button>
        </div>
    )
}