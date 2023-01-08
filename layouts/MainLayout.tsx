import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../components/ui"

interface Props {
    title?    : string
    children? : ReactNode | undefined 
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Beni Lopez"/>
            <meta name="description" content={`Detalles sobre el pokémon ${ title }`}/>
            <meta name="keywords" content={`${ title } pokemon, pokedex`}/>
        </Head>

        <Navbar/>

        <main>
            { children }
        </main>
    </>
  )
}
