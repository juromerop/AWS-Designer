

import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="bg-transparent border-solid border-4 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] rounded-md flex flex-col justify-center items-center p-4 w-[20%] ">
      {children}
    </div>
  );
};

export default Container;
