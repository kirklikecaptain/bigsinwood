import React, { Fragment } from 'react';
import Meta from '../../components/Meta';
import mainLogo from './big-sin-wood-landing.png';
import './style.less';

const HomePage = () => {
  return (
    <Fragment>
      <Meta
        title='BIG SIN WOOD'
        description='Handcrafted Furniture'
        canonical='https://www.bigsinwood.com'
      />
      <main>
        <div className='message'>
          <div className='text'>
            <div>Welcome to</div>
            <img src={mainLogo} alt='BIG SIN WOOD' />
            <p>The new web portal is coming soon!</p>
            <p>
              In the meantime... visit us on{' '}
              <a
                href='https://www.instagram.com/bigsinwood/'
                target='_blank'
                rel='noopener noreferrer'
              >
                IG
              </a>
            </p>
            <p className='tag'>"Yall come back now, ya hear"</p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
