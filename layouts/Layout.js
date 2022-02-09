import Header from "../components/Header";
import { MainMaxWidthWrapper } from "../components/styles/Global";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainMaxWidthWrapper>{children}</MainMaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
