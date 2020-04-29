import React, { Fragment } from 'react';
import Meta from '../../components/Meta';
import downloadFile from './WILD-FOODS_Guide_BIG-SIN-INDUSTRIES.pdf';
import image from './wild-foods.jpg';
import './wild-food.less';

const WildFoodPage = () => {
  return (
    <Fragment>
      <Meta
        title='Wild Foods | Big Sin Industries'
        description='Sustainable Wild Food - Hand picked and hand delivered'
        canonical='https://www.bigsinwood.com/wildfood/'
        ogImage={image}
      />
      <div id='wild-food'>
        <div className='container'>
          <div className='guide'>
            <img src={image} alt='Wild Foods' />
            Read our guide to storing, cleaning, prepping, and cooking Wild Foods.
            <br />
            <a href={downloadFile} download>
              Download the PDF
            </a>
          </div>
          <div className='iframe-wrapper'>
            <iframe
              title='Order Form'
              src='https://docs.google.com/forms/d/e/1FAIpQLSepo7WeMeCWgNB-ZP5fd4olEtBm7H_Fv_WONinUQKTc5yzQaA/viewform?embedded=true'
              frameBorder='0'
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WildFoodPage;
