import React from "react";

const CustomeInput = ({ label, ...rest }) => {
  return (
    <div className='space-y-1'>
      <div className='space-y-1'>{label && <label>{label}</label>}</div>
      <input
        {...rest}
        className='w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400'
      />
    </div>
  );
};

export default CustomeInput;
