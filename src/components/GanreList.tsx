import React, { useEffect, useState } from 'react'
import api from '../services/api-client'
import { Game, FetchGamesResponse } from '../model/fetch-game-types'
import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import { AxiosError } from 'axios'
import { Genre } from './model/fetch-genge-types'

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>()
  const [error, setError] = useState<string>("");
  useEffect(() => {
    api.get<FetchGamesResponse>("/games")
      .then(res => setGenres(res.data.results))
      .catch((e: AxiosError) => {
        setError(e.message)
      })
  }, [])



  return (
    <>
      error ? <Text color={"red"} fontSize={"2rem"}>{error} : <ul></ul></Text>
      {genres?.map(g => <li key={g.id}>{g.name}</li>)}
    </>
  )
}

export default GenreList