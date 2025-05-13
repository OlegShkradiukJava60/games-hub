import { Flex, Image } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

const Nav = () => {
  return (
    <Flex
      as="nav"
      p={4}
      bg="transparent"
      align="center"
      justify="space-between"
    >
      <Image src="/src/assets/logo.jpg" width="7" alt="Logo" />
      <ColorModeButton />
    </Flex>
  );
};

export default Nav;
