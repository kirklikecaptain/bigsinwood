import React, { Fragment } from 'react';
import Meta from '../../components/Meta';
import './style.less';

const HomePage = () => {
  return (
    <Fragment>
      <Meta title='Big Sin Wood' />
      <main>
        <div>
          <h1>big sin wood</h1>
          <p>- handcrafted furniture -</p>
          <p>
            follow us on{' '}
            <a href='https://instagram.com/big___sin' target='_blank' rel='noopener noreferrer'>
              instagram
            </a>
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
