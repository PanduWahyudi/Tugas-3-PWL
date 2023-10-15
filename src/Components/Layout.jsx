/* eslint-disable react/prop-types */
import Footer from './Footer';
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen bg-old-purple flex items-center justify-center">
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
