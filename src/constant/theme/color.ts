import { extendTheme } from "@chakra-ui/react";

const customColor = extendTheme({
  colors: {
    main: {
      "50": "#FDF6E7",
      "100": "#FAE5BC",
      "200": "#F7D491",
      "300": "#F4C366",
      "400": "#F1B13B",
      "500": "#EFA010",
      "600": "#BF800D",
      "700": "#8F600A",
      "800": "#5F4007",
      "900": "#302003",
    },
  },
});

export default customColor;
