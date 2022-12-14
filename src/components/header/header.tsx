import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <Box
        w="full"
        height="80px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        shadow="base"
      >
        <Link href="/">
          <Heading as="h1" fontSize="3xl">
            ใกใใใ
          </Heading>
        </Link>
      </Box>
    </header>
  );
};

export default Header;
