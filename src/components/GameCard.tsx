import React from "react";
import { Game } from "../model/fetch-game-types";
import { Card, Image, Text, HStack, Badge } from "@chakra-ui/react";
import Rater from "./Rater";

interface Props {
  game: Game;
}
function getColors(metacritic: number): { color: string; bg: string } {
  let res: { color: string; bg: string };
  res =
    metacritic > 90
      ? { color: "white", bg: "green" }
      : { color: "black", bg: "lightgray" };
  return res;
}
function getRaterColor(starsNumber: number): { color: string } {
  let rating: { color: string };
  if (starsNumber >= 4) {
    rating = { color: "green" };
  } else if (starsNumber >= 3) {
    rating = { color: "yellow" };
  } else {
    rating = { color: "red" };
  }
  return rating;
}
const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card.Root
      maxW={{
        base: "xs",
        sm: "sm",
      }}
      overflow="hidden"
    >
      <Image
        height={"100%"}
        objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
        <Card.Footer>
          <HStack justifyContent={"space-between"}>
            <Text>
              {game.parent_platforms.map((p) => p.platform.slug).join("; ")}
            </Text>
            <Badge
              {...getColors(game.metacritic)}
              fontSize={"0.5rem"}
              borderRadius={20}
            >
              {game.metacritic}
            </Badge>
            <HStack
              fontSize={{
                sm: "1rem",
                md: "1.5rem",
                lg: "2rem",
              }}
              color={getRaterColor(game.rating).color}
            >
              <Rater rate={game.rating} maxRate={5} />
            </HStack>
          </HStack>
        </Card.Footer>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
