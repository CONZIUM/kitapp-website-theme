import React from 'react';

const FeatureContent = [
  {
    icon: '132',
    title: 'Planlama',
    subTitle: `Kurumsal kimliğinizi ve markanızı oluştururken, müşterilerinizin ihtiyaçlarını ve beklentilerini dikkate alırız.`,
    bgColor: '#FFEBDB',
    delayAnimation: ''
  },
  {
    icon: '133',
    title: 'Geliştirme',
    subTitle: `Mobil uygulama ve web siteleri geliştirirken, kullanıcı deneyimini ve kullanıcı dostu arayüzleri ön planda tutarız.`,
    bgColor: '#E0F8F8',
    delayAnimation: '200'
  },
  {
    icon: '134',
    title: 'Sonuç',
    subTitle: `Sonuç odaklı çalışırız. Müşterilerimizin ihtiyaçlarına ve beklentilerine uygun çözümler üretiriz.`,
    bgColor: '#F7EDFF',
    delayAnimation: '400'
  }
];

const FancyFeatureTewentyThree = () => {
  return (
    <>
      {FeatureContent.map((val, i) => (
        <div
          className='col-lg-4 col-md-6'
          data-aos='fade-right'
          data-aos-duration='1200'
          data-aos-delay={val.delayAnimation}
          key={i}>
          <div className='block-style-twentyTwo'>
            <div
              className='icon d-flex align-items-center justify-content-center'
              style={{ background: val.bgColor }}>
              <img src={`images/icon/${val.icon}.svg`} alt='icon' />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
            <a className='arrow-icon' href='#'>
              <img className='arrow-icon' src='images/icon/135.svg' alt='icon' />
            </a>
          </div>
          {/* /.block-style-twentyTwo */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureTewentyThree;
