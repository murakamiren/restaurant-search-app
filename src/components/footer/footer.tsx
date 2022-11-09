import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <Box mt={12}>
        <Box w="full" py={12} bgColor="blackAlpha.200" px={12} display="flex" flexDir="column">
          <Link href="/">
            <Text as="small" fontSize="2xl" fontWeight="bold">
              ちかれす
            </Text>
          </Link>
          <Text as="small">本サービスはホットペッパー グルメサーチAPIを使用しています</Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
