import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Routes from './router/Routes';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  window.addEventListener('load', AOS.refresh);

  return (
    <>
      <Helmet>
        <title>Kmosapp-Mobil Uygulama ve Yazılım Ajansı</title>
        <meta property='og:site_name' content='kmosapp' />
        <meta property='og:url' content='https://kmosapp.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Kmosapp-Mobil Uygulama ve Yazılım Ajansı' />
        <meta
          name='keywords'
          content='agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase, Digital marketing agency, Digital marketing company, Digital marketing services, sass, software company'
        />
        <meta
          name='description'
          content='Deski is a creative saas and software React template designed for saas and software Agency websites.'
        />
        <meta name='description' content='Kmosapp-Mobil Uygulama ve Yazılım Ajansı' />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
