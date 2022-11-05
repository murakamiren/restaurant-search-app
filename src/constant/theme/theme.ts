import { extendTheme } from "@chakra-ui/react";

import floatingLabelTheme from "./floatingLabelTheme";
import fontsTheme from "./fontsTheme";

const theme = extendTheme({
  fontsTheme,
  components: {
    Form: floatingLabelTheme,
  },
});

export default theme;
