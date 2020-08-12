import React from 'react';

const Page = ({ children }) => {
  return (
    <main>
      <div className='edges'>
        <div className='container'>{children}</div>
      </div>
    </main>
  );
};

export default Page;
