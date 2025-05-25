import {
  Text,
  Spinner,
  List,
  ListItem,
  HStack,
  Avatar,
  AvatarFallback,
  Button,
  Box,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';

const GenreList = () => {
  const { data, error, isLoading } = useGenre();

  if (error) {
    return (
      <Text color="red.500"
        fontSize="2xl"
        p={4}>
        {error}
      </Text>
    );
  }

  if (isLoading) {
    return (
      <Spinner
        size="xl"
        boxSize="65px"
        borderWidth="10px"
        color="yellow.500"
        marginTop="40%"
        marginLeft="10%"
      />
    );
  }

  return (
    <Box maxH="80vh"
      overflowY="auto"
      overflowX="hidden"
      pr={2}
      pl={2}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={3}>
          Genres
      </Text>
      <List.Root m={0}>
        {data?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack
              align="center"
              height="60px"
              borderRadius="md"
              p={1}
              _hover={{ bg: "gray.100" }}
            >
              <Avatar.Root
                size="sm"
                boxSize="40px"
                name={genre.name}
                src={genre.image_background}
              >
                <Avatar.Image src={genre.image_background} />
                <AvatarFallback>{genre.name.charAt(0)}</AvatarFallback>
              </Avatar.Root>
              <Button
                variant="outline"
                border="none"
                fontSize="md"
                width="100%"
                height="40px"
                justifyContent="flex-start"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </Box>
  );
};

export default GenreList;
