import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gridTemplateRows={{ base: "auto auto", md: "auto auto" }}
      gap={2}
      p={5}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <GridItem
        area="aside"
        bg="gold"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        justifyContent="center"
        p={2}
        textAlign="center"
      >
        ASIDE
      </GridItem>

      <GridItem
        area="main"
        bg="green"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
