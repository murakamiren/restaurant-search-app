import { extendTheme } from "@chakra-ui/react";

import { primary } from "./color";
import floatingLabelTheme from "./floatingLabelTheme";
import fontsTheme from "./fontsTheme";

const theme = extendTheme({
  fontsTheme,
  colors: primary,
  components: {
    Form: floatingLabelTheme,
  },
});

export default theme;
