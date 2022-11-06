import { Box, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  gap?: number | string;
  text: string;
  fontSize?: string;
  size?: { w: string | number; h: string | number };
};

/**
 * Text with Icon Component
 * @param icon put react-icon`s icon here. require.
 * @param gap gap between text and icon. default is 1
 * @param text text to render. require.
 * @param fontSize fontSize. default is md
 * @param size icon size.
 */
const TextWithIcon: FC<Props> = ({ icon, gap = 1, text, fontSize = "md", size }) => {
  return (
    <Box display="flex" alignItems="center" gap={gap}>
      <Icon as={icon} w={size?.w} h={size?.h} />
      <Text fontSize={fontSize}>{text}</Text>
    </Box>
  );
};

export default TextWithIcon;
