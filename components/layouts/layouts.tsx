import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar1 } from '../ui';



interface Props extends PropsWithChildren<{}> {
    title?: string;
}


const origin = (typeof window === 'undefined' ? '': windows.location.origin)

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Adrian Galvan" />
                <meta name="description" content="Informacion sobre el pokemon XXXXX" />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Informacion sobre ${title}`} />
<meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
<meta property="og:image" content= { `${origin}/img/banner.png`} />
            </Head>
            <Navbar1/>


            <main>
                {children}
            </main>
        </>
    );
};
