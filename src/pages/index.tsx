import React from "react";
import {Card,Grid} from "@nextui-org/react";
import type { NextPage, GetStaticProps } from 'next'
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import {PokemonListResponse, SmallPokemon} from '../../interfaces';
import { PokemonCard } from "../../components/pokemon";


interface Props{
  pokemons: SmallPokemon[];
}

//export default function Home() {
const Home: NextPage<Props> = ({pokemons}) =>{  
return (
    <Layout title='Listado de Pokemons'>

      <Grid.Container gap= {2} justify='flex-start'>
        {
        pokemons.map((pokemon)=>(
          <PokemonCard key={pokemon.id} pokemon={ pokemon }/>
        ))
        
      }

      </Grid.Container>





    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

    const pokemons: SmallPokemon[] = data.results.map((poke,i)=>({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i+ 1 }.svg`

    }) )

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg
  return{
    props:{
      pokemons
    }
  }

}



export default Home
