import "./App.css";
import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main" ',
        md: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Nav></Nav>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside" paddingX="5">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(selectedGenre) => setSelectedGenre(selectedGenre)}
          ></GenreList>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
