import {
  Menu,
  Button,
  Portal,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useGenre from "../hooks/useGenre";
import MotionComponent from "./MotionComponent";

interface Props {
  selectedGenre: string | null;
  onSelectGenre: (genreSlug: string | null) => void;
}

const duration = 0.7;

const GenreSelector: FC<Props> = ({ selectedGenre, onSelectGenre }) => {
  const { data: genres, isLoading, error } = useGenre();
  const [isOpen, setIsOpen] = useState(false);

  const showOnThisBreakpoint = useBreakpointValue({ base: true, md: false });
  if (!showOnThisBreakpoint) return null;

  const selectedGenreName =
    selectedGenre === null
      ? "All Genres"
      : genres.find((g) => g.slug === selectedGenre)?.name || "Genres";

  return (
    <>
      {isLoading && <Spinner />}
      {!error && (
        <Menu.Root onExitComplete={() => setIsOpen(false)}>
          <Menu.Trigger asChild>
            <Button
              variant="outline"
              size="sm"
              borderWidth={0}
              onClick={() => setIsOpen(!isOpen)}
              marginBottom={3}
            >
              {selectedGenreName}
              {isOpen ? (
                <MotionComponent duration={duration}>
                  <FaChevronUp />
                </MotionComponent>
              ) : (
                <FaChevronDown />
              )}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <MotionComponent duration={duration}>
                <Menu.Content>
                  <Menu.Item
                    value="all"
                    onClick={() => {
                      onSelectGenre(null);
                      setIsOpen(false);
                    }}
                  >
                    All Genres
                  </Menu.Item>
                  {genres.map((genre) => (
                    <Menu.Item
                      key={genre.id}
                      value={genre.slug}
                      onClick={() => {
                        onSelectGenre(genre.slug);
                        setIsOpen(false);
                      }}
                    >
                      {genre.name}
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </MotionComponent>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      )}
    </>
  );
};

export default GenreSelector;
