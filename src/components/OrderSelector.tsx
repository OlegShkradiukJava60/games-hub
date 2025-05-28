import { Menu, Button, Portal } from '@chakra-ui/react'
import { type FC, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import type GameQuery from '../model/gameQuery';

interface Props {
    setGameQuery: (gameQuery: GameQuery) => void;
    gameQuery: GameQuery;
}
const OrderSelector: FC<Props> = ({setGameQuery, gameQuery}) => {
   const [isOpen, setIsOpen] =  useState<boolean>(false)
   const orderArray = [{"value":"name", "displayedName":"Name"},
    {"value":"-metacritic", "displayedName":"Critic's Score"},
    {"value":"-rating", "displayedName":"Player's Score"},
    {"value":"-released", "displayedName":"Release Date"},
    {"value":"added", "displayedName":"Added to Library"},
    {"value":"created", "displayedName":"Created"},
    {"value":"updated", "displayedName":"Updated"},
    ]

  return (
    <>
        <Menu.Root >
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3} onClick={() => setIsOpen(!isOpen)}>
         { gameQuery.ordering?.displayedName || "Ordering"}
          {isOpen ? <FaChevronUp></FaChevronUp> :<FaChevronDown></FaChevronDown>}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content _hover={{cursor: "pointer"}}>
            {orderArray.map(o => <Menu.Item _hover={{cursor: "pointer", bg: "blue.300"}} key={o.value} value={o.value}
             onClick={() => {setGameQuery({...gameQuery, ordering: o}); setIsOpen(false)}}>{o.displayedName}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </>
    
  )
}

export default OrderSelector