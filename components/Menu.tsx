import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import { GiFlamer } from "react-icons/gi";
import { MdBrightness4 } from "react-icons/md";

interface menuProps {
  switchActivePath: () => void;
  isCurrentPage: (pageName: string) => boolean;
}

export const Menu = ({ switchActivePath, isCurrentPage }: menuProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      p="4"
      w="100%"
      h="24"
      bgColor="whiteAlpha.50"
      boxShadow="md"
      alignItems="center"
      justifyContent="space-around"
    >
      <Image h="100%" src="./logo-blue.gif" />
      <Text
        fontFamily="'Montserrat', sans-serif"
        fontWeight="600"
        colorScheme="orange"
        color={colorMode === "dark" ? "orange.100" : "orange.400"}
        fontSize="3xl"
      >
        TermConversor
      </Text>
      <HStack spacing="4">
        <Breadcrumb
          colorScheme="blue"
          fontWeight="500"
          fontSize="xl"
          spacing="8px"
          separator={<Icon as={GiFlamer} color="orange.500" />}
        >
          <BreadcrumbItem isCurrentPage={isCurrentPage("Home")}>
            <BreadcrumbLink
              href="#"
              onClick={switchActivePath}
              color={
                isCurrentPage("Home")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage={isCurrentPage("About")}>
            <BreadcrumbLink
              href="#"
              onClick={switchActivePath}
              color={
                isCurrentPage("About")
                  ? "blue.100"
                  : colorMode === "dark"
                  ? "whiteAlpha.800"
                  : "blue.600"
              }
              _hover={{
                color: "blue.100",
              }}
            >
              About
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <IconButton
          aria-label="switch theme"
          colorScheme="orange"
          variant="ghost"
          icon={<MdBrightness4 />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};
