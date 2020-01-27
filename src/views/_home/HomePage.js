import React, { Fragment } from 'react';
import Meta from '../../components/Meta';
import './style.less';

const HomePage = () => {
  return (
    <Fragment>
      <Meta title='BIG SIN WOOD' description='Handcrafted Furniture' />
      <main>
        <div className='message'>
          <p>Welcome to</p>
          <h1>
            <span>BIG SIN WOOD</span>
          </h1>
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
          <p className='tag'>"Yall come back soon now, ya hear"</p>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
