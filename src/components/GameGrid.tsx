import { useEffect, useState } from 'react'
import api from '../services/api-client'
import type { Game, FetchGamesResponse } from './model/fetch-game-types'
import { Center, SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import type { AxiosError } from 'axios'

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error] = useState<AxiosError | null>(null)


    useEffect(() => {
        api
            .get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch((e: AxiosError) => {
                console.error("Ошибка при загрузке игр:", e.message)
            })
    }, [])

    if (error) return
    <Center mt={10}>
        <Text color="red">{error}</Text>
    </Center>

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5} maxHeight="80vh" overflow="auto">
            {games.map(g => <GameCard key={g.id} game={g} />)}
        </SimpleGrid>
    )
}

export default GameGrid
