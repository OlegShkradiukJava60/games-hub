
import {  Grid, GridItem, Stack} from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import OrderSelector from './components/OrderSelector';
import { GameQuery } from './model/gameQuery';

function App() {
 const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid templateAreas={{
      base: '"nav" "main" ',
      md: '"nav nav" "aside main"'
    }}>
      <GridItem area="nav"><Nav></Nav>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" paddingX="5" >
          <GenreList gameQuery={gameQuery} setGameQuery={setGameQuery}></GenreList>
        </GridItem>
      </Stack>
      <GridItem area="main" >
          <OrderSelector gameQuery={gameQuery} setGameQuery={setGameQuery}></OrderSelector>
          <PlatformSelector gameQuery={gameQuery} setGameQuery={setGameQuery}></PlatformSelector>
          <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App