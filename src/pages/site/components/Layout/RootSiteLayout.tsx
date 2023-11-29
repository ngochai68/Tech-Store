import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './RootSiteLayout.scss';
const RootSiteLayout = () => {
  return (
    <div className='main' id='main'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootSiteLayout;
