import React, { useEffect, useState } from 'react'
import { Layout } from '../../../components/layouts'
import { Container,Text, Image,Grid, Card } from '@nextui-org/react'
import { NoFavorites } from '../../../components/ui'
import { Pokemon } from '../../../interfaces/pokemon-full';
import { localFavorites } from '../../../utils';
import { FavoritePokemons } from '../../../components/pokemon';


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(()=>{
    setFavoritePokemons( localFavorites.pokemons() )
  },[])



  return (

    <Layout title='Favoritos'>
      {
        favoritePokemons.length === 0
        ? ( <NoFavorites/>)
        : (

          <FavoritePokemons pokemons={favoritePokemons} />
         


        //   <Grid.Container gap={2} direction='row' justify='flex-start'>
        //     {
        //         favoritesPokemons.map(id => (
        //           <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        //             <Card hoverable clickable css={{padding:10}}>
        //             <Card.Image

        //               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id}.svg`}
        //               width={'100%'}
        //               height={ 140 }
        //               />
        //               </Card>
        //           </Grid>
        // ))  
        //     }
        //   </Grid.Container>
        )
      }
 
    </Layout>

    // <Layout title='Favoritos'>
    // <Container css={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     height: 'calc(100vh -100px)',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     alighSelf: 'center'
    // }}>

    //     <Text h1> No hay favoritos</Text>
    //     <Image
    //         src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
    //         width={250}
    //         height={250}
    //         css={{
    //             opacity:0.1
    //         }}
    //     />

    // </Container>

  )
}

export default FavoritesPage
