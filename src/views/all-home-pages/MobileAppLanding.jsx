import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderLandingMobileApp from '../../components/header/landing/HeaderLandingMobileApp';
import MobileAppPortfolio from '../../components/portfolio/MobileAppPortfolio';
import MobileAppScreenSlider from '../../components/portfolio/MobileAppScreenSlider';
import TestimonialThree from '../../components/testimonial/TestimonialThree';
import BrandThree from '../../components/brand/BrandThree';
import FooterSeven from '../../components/footer/FooterSeven';
import CopyRightThree from '../../components/footer/CopyRightThree';
import FancyFeatureTewentyThree from '../../components/features/FancyFeatureTewentyThree';
import PricingSeven from '../../components/pricing/PricingSeven';

const MobileAppLanding = () => {
  return (
    <div className='main-page-wrapper font-gordita'>
      <Helmet>
        <title> Kmosapp || Mobil Uygulama ve Yazılım Ajansı</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingMobileApp />
      {/* End Mobile App Landing Header */}

      {/* =============================================
            Theme Hero Banner
        ==============================================  */}
      <div className='hero-banner-ten' id='home'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-9 col-lg-11 col-md-8 m-auto'>
              <h1 className='hero-heading' data-aos='fade-up' data-aos-duration='1200'>
                Fikirleriniz hayal olmasın Kmosapp ile gerçekleşsin.
              </h1>
              <p
                className='hero-sub-heading'
                data-aos='fade-up'
                data-aos-duration='1200'
                data-aos-delay='100'>
                Dinamik ve sürekli gelişen kadromuzla her zaman sizin yanınızdayız.
              </p>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className='icon-box-one'>
          <img src='images/logo/logo-39.png' alt='icon' />
        </div>
        <div className='icon-box-two'>
          <img src='images/logo/logo-40.png' alt='icon' />
        </div>
        <div className='icon-box-three'>
          <img src='images/logo/logo-41.png' alt='icon' />
        </div>
        <div className='icon-box-four'>
          <img src='images/logo/logo-42.png' alt='icon' />
        </div>
        <div className='icon-box-five'>
          <img src='images/logo/logo-43.png' alt='icon' />
        </div>
        <div className='icon-box-six'>
          <img src='images/logo/logo-44.png' alt='icon' />
        </div>
        <div className='icon-box-seven'>
          <img src='images/logo/logo-45.png' alt='icon' />
        </div>
        <div className='icon-box-eight'>
          <img src='images/logo/logo-46.png' alt='icon' />
        </div>
      </div>
      {/* /.hero-banner-ten */}

      {/* =============================================
            App Screen Preview
        ==============================================  */}

      {/* /.app-screen-preview-one  */}

      {/* =============================================
				Fancy Feature Twenty Two
			==============================================  */}
      <div className='fancy-feature-twentyTwo mpt-200 pt-130 md-mt-80 sm-pt-100' id='product'>
        <div className='container'>
          <div className='title-style-ten mb-40 md-mb-20'>
            <div className='row align-items-center'>
              <div className='col-lg-7'>
                <h2>Kmosapp ile tarih olmayın güncel olun.</h2>
              </div>
              <div className='col-lg-5'>
                <p
                  className='md-pt-20'
                  style={{
                    fontSize: '16px'
                  }}>
                  Kmosapp olarak her zaman en yeni teknolojileri kullanarak sizlere en iyi hizmeti
                  sunmaya çalışıyoruz. Sektörün önde gelen teknolojileri olarak Flutter, React
                  Native, NodeJs, Kotlin, Swift, Django ve Laravel gibi teknolojileri kullanarak
                  sizlere en iyi hizmeti sunuyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <FancyFeatureTewentyThree />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/* 	=============================================
            Fancy Feature Twenty Five
        ==============================================  */}
      <div className='fancy-feature-twentyFive lg-container pt-200 md-pt-100' id='features'>
        <div className='container'>
          <div className='block-style-twentyFive'>
            <div className='row align-items-center'>
              <div
                className='col-xl-7 col-lg-6 col-md-10 m-auto'
                data-aos='fade-right'
                data-aos-duration='1200'>
                <div className='screen-container'>
                  <img
                    src='https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80'
                    alt='screen'
                  />
                </div>
                {/*  /.screen-container */}
              </div>
              <div className='col-xl-5 col-lg-6' data-aos='fade-left' data-aos-duration='1200'>
                <div className='text-wrapper pl-xl-5'>
                  <h3 className='title'>
                    Tasarım ve kullanıcı deneyimi için en iyi teknolojileri kullanıyoruz.
                  </h3>
                  <p>
                    Dizayn en önemli kısımdır. Kullanıcı deneyimi ve kullanıcı dostu bir tasarım ile
                    sizlere en iyi hizmeti sunuyoruz.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}

          <div className='block-style-twentyFive mt-200 md-mt-100'>
            <div className='row align-items-center'>
              <div
                className='col-xl-7 col-lg-6 col-md-10 m-auto text-center text-lg-right order-lg-last'
                data-aos='fade-left'
                data-aos-duration='1200'>
                <div className='screen-container'>
                  <img src='images/shape/bg6.svg' alt='shape' className='ml-auto bg-round-shape' />
                  <div className='block-content'>
                    <div className='row align-items-center'>
                      <div className='col-sm-6'>
                        <div className='feature-meta'>
                          <div className='icon d-flex align-items-end'>
                            <img src='images/icon/136.svg' alt='' />
                          </div>
                          <h4>Kullanıcı Dostu Bir Arayüz</h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}

                      <div className='col-sm-6'>
                        <div className='feature-meta'>
                          <div className='icon d-flex align-items-end'>
                            <img src='images/icon/137.svg' alt='' />
                          </div>
                          <h4>
                            SEO <br />
                            Optimizasyonu
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                        <div className='feature-meta'>
                          <div className='icon d-flex align-items-end'>
                            <img src='images/icon/138.svg' alt='' />
                          </div>
                          <h4>
                            Kaliteli ve Hızlı <br />
                            Kodlama
                          </h4>
                        </div>
                        {/* /.feature-meta */}
                      </div>
                      {/* End .col */}
                    </div>
                  </div>
                  {/*  /.block-content */}
                </div>
                {/* /.screen-container */}
              </div>
              <div className='col-xl-5 col-lg-6' data-aos='fade-right' data-aos-duration='1200'>
                <div className='text-wrapper order-lg-first'>
                  <h6>
                    <span>
                      Çözüm odaklı <br />
                    </span>
                  </h6>
                  <h3 className='title'>
                    Neden Kmosapp? <br />
                  </h3>
                  <p>Yanlış anlaşılan şeyleri doğru anlıyoruz.</p>
                  <ul>
                    <li>Mükemmel İletişim</li>
                    <li>Temiz ve Düzenli Kodlama</li>
                    <li>Hızlı Destek</li>
                    <li>
                      Kullanıcı Dostu <br />
                    </li>
                  </ul>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyFive */}
        </div>
      </div>
      {/*  /.fancy-feature-twentyFive */}

      {/* 	=============================================
            App Screen Preview
        ==============================================  */}
      <div className='app-screen-preview-two mt-200 md-mt-130'>
        <div className='container'>
          <div className='title-style-eleven text-center mb-120 md-mb-70'>
            <h2>Portfolyo</h2>
          </div>
        </div>

        <div className='app-preview-slider-two arrow-none'>
          <MobileAppScreenSlider />
        </div>
        {/* /.app-preview-slider-two */}
      </div>
      {/* /.app-screen-preview-two */}

      {/* =====================================================
            Pricing Section Seven
        ===================================================== */}

      {/* /.pricing-section-seven */}

      {/* =====================================================
            Client Feedback Slider Seven
        ===================================================== */}
      <div className='client-feedback-slider-seven mt-250 md-mt-100' id='feedback'>
        <div className='inner-container'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 m-auto'>
                <img src='images/icon/143.svg' alt='icon' className='m-auto' />
                <div className='title-style-eleven text-center mt-30'>
                  <h2>Bizi tercih eden müşterilerimiz neler söylüyor ?</h2>
                </div>
                {/* /.title-style-eleven */}
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-8 col-lg-10 m-auto'>
                <div className='clientSliderFive  mt-80 md-mt-50'>
                  <TestimonialThree />
                </div>
                <img src='images/shape/156.svg' alt='shape' className='shapes shape-one' />
                <img src='images/shape/157.svg' alt='shape' className='shapes shape-two' />
                <img src='images/shape/158.svg' alt='shape' className='shapes shape-three' />
              </div>
            </div>
          </div>
        </div>
        {/*  /.inner-container */}
        <img src='images/shape/bg7.svg' alt='shape' className='bg-image' />
      </div>
      {/* /.client-feedback-slider-six */}

      {/* =====================================================
            Useable Tools
        ===================================================== */}

      {/* /.useable-tools-section-three */}

      {/* =====================================================
            Fancy Short Banner Twelve
        ===================================================== */}
      <div className='fancy-short-banner-twelve'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-10 col-lg-11 m-auto' data-aos='fade-up' data-aos-duration='1200'>
              <div className='title-style-ten text-center'>
                <h2>Kmosapp'i sevdiniz mi? Hemen iletişime geçin ve projenizi başlatın.</h2>
                <p className='pt-25 pb-45'></p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img src='images/shape/220.svg' alt='shape' className='shapes shape-one' />
        <img src='images/shape/221.svg' alt='shape' className='shapes shape-two' />
      </div>
      {/* /.fancy-short-banner-twelve */}

      {/* =====================================================
				Footer Style Seven
			===================================================== */}
      <footer className='theme-footer-seven mt-120 md-mt-100'>
        <div className='lg-container'>
          <div className='container inner-btn-black'>
            <FooterSeven />
          </div>

          <div className='container'>
            <div className='bottom-footer'>
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default MobileAppLanding;
