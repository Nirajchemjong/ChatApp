import React from "react";

const Register = () => {
  const inputField = [
    {
      label: "Fname",
      name: "fname",
    },
  ];
  return (
    <div>
      <div
        className=' bg-slate-200 text-dark-800'
        n
      >
        <h1 className='text-center font-medium p-5'> Registeration </h1>
        <from className='m-3 shadow-lg flex justify-center align-middle bg-white-500 lg:w-3/4 '>
          <label>First Name: </label>
        </from>
      </div>
    </div>
  );
};

export default Register;
