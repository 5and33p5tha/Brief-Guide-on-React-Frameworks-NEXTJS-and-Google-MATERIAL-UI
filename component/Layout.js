import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  //This is to change the format of the page we see. It is defined in _app.js
  return (
    <>
      <Header />
      {children}
      {/* This children folder will contain  our other pages like first.js or fetchuser.js etc. 
            This Arrives from PageProps of _app.js*/}
      <Footer />
    </>
  );
};

export default Layout;
