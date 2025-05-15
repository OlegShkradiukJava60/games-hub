import React, { useEffect, useState } from 'react'
import type { Game } from './model/fetch-game-types'
import { Card, Image, Badge, Text, } from '@chakra-ui/react'
import api from '../services/api-client'
interface Props {
  game: Game
}
const GameCard: React.FC<Props> = ({ game }) => {

  const metacriticColor = game.metacritic > 90 ? 'green' : 'gray.300'
  const metacriticTextColor = game.metacritic > 90 ? 'white' : 'black'

  const [description, setDescription] = useState<string>('')
  useEffect(() => {
    api
      .get<{ description_raw: string }>(`/games/${game.id}`)
      .then((res) => setDescription(res.data.description_raw))
      .catch(() => setDescription('Описание недоступно'))
  }, [game.id])

  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        height={"100%"}
        objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}
        </Card.Title>

        <Badge
          bg={metacriticColor}
          color={metacriticTextColor}
          px={2}
          py={1}
          width="fit-content"
        >
          Metacritic: {game.metacritic}
        </Badge>

        <Text fontSize="sm" color="gray">
          {game.released}
        </Text>
        <Card.Description  >

          <Text
            maxHeight="120px"
            overflowY="auto"
            fontSize="sm"
            color="gray">
            {description}
          </Text>
        </Card.Description>

      </Card.Body>

    </Card.Root>
  )
}

export default GameCard
