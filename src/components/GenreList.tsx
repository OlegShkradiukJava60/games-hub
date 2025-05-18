
import { Text} from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';


const GenreList = () => {
    const {data, error} = useGenre();
    const genres = data;

    
    
  return (
    <>
    {error? <Text color={"red"} fontSize={"2rem"}>{error}</Text> : <ul>
          {genres?.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>}
    </>
  )
}

export default GenreList