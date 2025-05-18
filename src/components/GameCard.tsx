import React from 'react'
import { Game } from '../model/fetch-game-types'
import { Card, Image, Text, HStack, Badge } from '@chakra-ui/react'
interface Props {
    game: Game
}
function getColors(metacritic: number): {color: string, bg: string} {
        let res: {color: string, bg: string} ;
        res = metacritic > 90 ? {color: "white", bg: "green"} : {color: "black", bg: "lightgray"};
        return res;
    }
const GameCard: React.FC<Props> = ({game}) => {
   return (
    <Card.Root maxW={{
      base: "xs",
      sm: "sm"
    }} overflow="hidden">
      <Image height={"100%"} objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        <Card.Footer>
          <HStack justifyContent={'space-between'}>
                     <Text >{game.platforms.map(p => p.platform.name).join("; ")}</Text>
                     <Badge {...getColors(game.metacritic)} fontSize={"0.5rem"} borderRadius={20}>{game.metacritic}</Badge>
                    
                 </HStack>
        </Card.Footer>
        
      </Card.Body>
     
    </Card.Root>
  )
}

export default GameCard