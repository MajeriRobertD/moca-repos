import Navbar from './Navbar';
import FooterComponent from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <FooterComponent />
    </div>
  );
};

export default Layout;
