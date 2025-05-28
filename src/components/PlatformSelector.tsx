import { Menu, Button, Portal, Spinner } from '@chakra-ui/react'
import { type FC, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform.ts';
import type GameQuery from '../model/gameQuery.ts';

interface Props {
  setGameQuery: (gameQuery: GameQuery) => void;
  gameQuery: GameQuery;
}
const PlatformSelector: FC<Props> = ({ setGameQuery, gameQuery }) => {
  const { error, data: platforms, isLoading } = usePlatform();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>

      {isLoading && <Spinner></Spinner>}
      {!error && <Menu.Root >
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm" marginBottom={3} onClick={() => setIsOpen(!isOpen)}>
            {gameQuery.platform?.name || "Platforms"}
            {isOpen ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content _hover={{ cursor: "pointer" }}>
              {platforms.map(p => <Menu.Item _hover={{ cursor: "pointer", bg: "blue.300" }} key={p.name} value={p.id}
                onClick={() => { setGameQuery({ ...gameQuery, platform: p }); setIsOpen(false) }}>{p.name}</Menu.Item>)}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>}
    </>

  )
}

export default PlatformSelector