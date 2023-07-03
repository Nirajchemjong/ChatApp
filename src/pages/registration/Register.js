import "./Reg.css";
import React, { useState } from "react";
import CustomeInput from "../../components/customInput/CustomeInput";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState();

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const inputField = [
    {
      label: "First Name",
      name: "fname",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lname",
      type: "text",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      minLength: 6,
      required: true,
    },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: true,
    },
  ];
  return (
    <>
      <div className='min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full'>
        <section className='py-6 w-full max-w-xl  mx-auto '>
          {/* Sign In Form */}
          <div className='flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800'>
            <div className='p-5 md:px-16 md:py-12 grow'>
              <h1 className='text-2xl font-bold inline-flex items-center mb-2 space-x-2'>
                Registration
              </h1>
              <form
                className='space-y-6 '
                onSubmit={handleOnSubmit}
              >
                {inputField.map((item, id) => (
                  <CustomeInput
                    key={id}
                    {...item}
                    onChange={handleOnchange}
                  />
                ))}
                <div>
                  <button
                    type='submit'
                    className='w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90'
                  >
                    <svg
                      className='hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Confirm</span>
                  </button>
                  {/* Divider: With Label */}
                </div>
              </form>
            </div>
            <div className='p-5 md:px-16 grow text-sm text-center bg-gray-50 dark:bg-gray-700/50'>
              If you've already got an account click on!
              <Link
                to='/'
                className='font-medium ml-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300'
              >
                Log In
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
