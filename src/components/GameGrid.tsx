import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { Game, FetchGamesResponse } from '../model/fetch-game-types'
import { SimpleGrid, Text} from '@chakra-ui/react'
import GameCard from './GameCard'
import { AxiosError } from 'axios'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>()
    const [error, setError] = useState<string>("");
    useEffect(() => {
    api.get<FetchGamesResponse>("/games")
    .then(res => setGames(res.data.results))
    .catch((e:AxiosError) => {
        setError(e.message)
    }) 
    }, [])

    
    
  return (
    <>
    {error? <Text color={"red"} fontSize={"2rem"}>{error}</Text> : <SimpleGrid marginStart={{
      base:8,
      sm: 5,
      md:0
    }}
    marginEnd={{
      base: 0,
      sm: 5,
      
    }}
     columns={{
        base: 1,
        sm: 2,
        md: 3
    }} gap={5} maxHeight={"80vh"} overflow={"auto"}>
        {games?.map(g => <GameCard key={g.id} game={g}>
            
            </GameCard>)}
    </SimpleGrid>}
    </>
  )
}

export default GameGrid