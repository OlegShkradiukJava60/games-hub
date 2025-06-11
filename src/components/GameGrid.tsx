import { SimpleGrid, Spinner, Text} from '@chakra-ui/react'
import GameCard from './GameCard'
import useGame from '../hooks/useGame'
import { FC } from 'react'

const GameGrid: FC = () => {
    
const {error, data: games, isLoading} = useGame();
    
  return (
    <>
    {isLoading && <Spinner></Spinner>}
    {error? <Text color={"red"} fontSize={"2rem"}>{error.message}</Text> : <SimpleGrid marginStart={{
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