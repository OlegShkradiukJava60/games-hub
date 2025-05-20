import { SimpleGrid, Text, Spinner } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGame from '../hooks/useGame'

const GameGrid = () => {
  const { error, data, isLoading } = useGame();
  const games = data;

  return (
    <>
      {error ? (
        <Text color={"red"}
          fontSize={"2rem"}
        >{error}</Text>
      ) : isLoading ? (
        <Spinner size="xl"
          boxSize="65px"
          borderWidth="10px"
          color="yellow.500"
          marginTop="40%" />
      ) : (
        <SimpleGrid
          marginStart={{
            base: 8,
            sm: 5,
            md: 0
          }}
          marginEnd={{
            base: 0,
            sm: 5,
          }}
          columns={{
            base: 1,
            sm: 2,
            md: 3
          }}
          gap={5}
          maxHeight={"80vh"}
          overflow={"auto"}
        >
          {games?.map(g => (
            <GameCard key={g.id} game={g} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid