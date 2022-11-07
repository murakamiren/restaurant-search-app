import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <Box mt={12}>
        <Box w="full" py={12} bgColor="blackAlpha.200" px={12} display="flex" flexDir="column">
          <Text as="small" fontSize="2xl" fontWeight="bold">
            ちかれす
          </Text>
          <Text as="small">本サービスはホットペッパー グルメサーチAPIを使用しています</Text>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
