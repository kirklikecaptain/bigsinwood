import React, { Fragment } from 'react';
import Meta from '../../components/Meta';
import downloadFile from './WILD-FOODS_Guide_BIG-SIN-INDUSTRIES.pdf';
import './wild-food.less';

const WildFoodPage = () => {
  return (
    <Fragment>
      <Meta
        title='Wild Foods | Big Sin Industries'
        description='Sustainable Wild Food - Hand picked and hand delivered'
        canonical='https://www.bigsinwood.com/wildfood/'
      />
      <div id='wild-food'>
        <div className='container'>
          <div className='guide'>
            Read our guide to storing, cleaning, prepping, and cooking Wild Foods.
            <br />
            <a href={downloadFile} download>
              Download the PDF
            </a>
          </div>
          <div className='iframe-wrapper'>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLSepo7WeMeCWgNB-ZP5fd4olEtBm7H_Fv_WONinUQKTc5yzQaA/viewform?vc=0&c=0&w=1'
              frameBorder='0'
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WildFoodPage;
