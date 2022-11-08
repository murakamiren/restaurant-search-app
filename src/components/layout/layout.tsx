import { FC, ReactNode } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
