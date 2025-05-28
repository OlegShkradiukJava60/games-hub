import { Text, List, HStack, Avatar, Button, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import type { FC } from "react";
import type GameQuery from "../model/gameQuery";

interface Props {
  setGameQuery: (gameQuery: GameQuery) => void;
  gameQuery: GameQuery;
}
function getSelectedStyls(slug: string, selectedGenre: string | null) : {fontWeight: string, color: string} {
     return slug === selectedGenre ? {fontWeight: "bold", color: "red"}: {fontWeight: "normal", color: "initial"}
}
const GenreList: FC<Props> = ({setGameQuery, gameQuery}) => {
 const {data: genres, error, isLoading} = useGenre();
 return  (
    <>
    {isLoading && <Spinner></Spinner>}
      {error? (
        <Text color="red" fontSize={"2.5rem"}>
          {error}
        </Text>
      ) : (
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto">
          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background}/>
                </Avatar.Root>
                <Button {...getSelectedStyls(g.slug, gameQuery.genre)} variant={"outline"} borderWidth="0" fontSize={"1.1rem"} paddingX="1"
                onClick={()=>setGameQuery({...gameQuery, genre: g.slug})}>{g.name}</Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;