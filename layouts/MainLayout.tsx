import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../components/ui"

interface Props {
    title?    : string
    children? : ReactNode | undefined 
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Beni Lopez"/>
            <meta name="description" content={`Detalles sobre el pokémon ${ title }`}/>
            <meta name="keywords" content={`${ title } pokemon, pokedex`}/>
            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre ${ title }`} />
            <meta property="og:image" content={ `${origin}/img/banner.png` }/>
        </Head>

        <Navbar/>

        <main>
            { children }
        </main>
    </>
  )
}
