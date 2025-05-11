
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import { ColorModeButton } from './components/ui/color-mode'


function App() {


  return (
    <Grid templateAreas={{
      base: '"nav" "main" ',
      md: '"nav nav" "aside main"'
    }
    }>
      <GridItem area="nav" bg={'coral'}>NAV
        <ColorModeButton></ColorModeButton>
      </GridItem>
      <Stack hideBelow="md">
      <GridItem area="aside" bg={'gold'}>ASIDE</GridItem>
      </Stack>
      <GridItem area="main" bg={'purple'}>Main</GridItem>
    </Grid>
  )
}

export default App
