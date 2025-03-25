import GlobalFooter from 'components/global-footer/GlobalFooter';
import GlobalNavbar from 'components/global-navbar/GlobalNavbar';
import { Outlet } from 'react-router-dom';
import ScrollToTop from 'components/scroll-to-top/ScrollToTop';

/**
 * BaseLayout Component
 * Renders the base layout for the application.
 * It includes the global navbar, the main content, and the global footer.
 * @returns {JSX.Element} - The BaseLayout component.
 */
const BaseLayout = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <GlobalNavbar />
      <ScrollToTop />
      
      <main className='flex-grow px-4 py-6 max-w-7xl mx-auto w-full'>
      <Outlet />
      </main>
      <GlobalFooter />
      </div>
    </>
  );
};

export default BaseLayout;
