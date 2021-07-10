import { Button, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";

export const About = () => {
  return (
    <VStack h="85vh" spacing="6" p={["6", "6", "10", "4"]}>
      <Image
        w={["40", "40", "60"]}
        src="https://i1.sndcdn.com/avatars-000310442653-nt0o0y-t500x500.jpg"
        alt="Juliane Pires"
        border="4px"
        borderColor="orange"
        borderRadius="lg"
        mb="4"
      />
      <VStack spacing="2" textAlign="center">
        <Text color="orange" fontWeight="semibold">
          {" "}
          Hi, I'm Juliane, a passionate computer science learner 👨‍💻 working
          remotely from Mars 🚀
        </Text>
        <Text>
          {" "}
          I work as a Front End developer at Mobix Software Studio. 🧑‍💻
        </Text>
        <Text>
          {" "}
          I like to sing in the shower, coffee without sugar, crafted beers and
          open word games. 👾
        </Text>
        <Text>
          {" "}
          Also, I have a dog named Maria and two cats: Paulina and Isaac Newton
          🐱🐱🐶
        </Text>
        <Text>
          {" "}
          I’m currently learning CSS, Javascript, React, NextJS, Node, PHP and
          Shell Script. 🧠
        </Text>
      </VStack>
      <Button colorScheme="orange" leftIcon={<Icon as={FaGithubAlt} />}>
        My Github
      </Button>
    </VStack>
  );
};
