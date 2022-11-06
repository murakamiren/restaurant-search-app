import { extendTheme } from "@chakra-ui/react";

import customColor from "./color";
import floatingLabelTheme from "./floatingLabelTheme";
import fontsTheme from "./fontsTheme";

const theme = extendTheme({
  fontsTheme,
  components: {
    Form: floatingLabelTheme,
  },
  customColor,
});

export default theme;
