import React, { useState } from "react";

const App = () => {
  const [showAcademicButtons, setShowAcademicButtons] = useState(true);
  const [showIntranetButtons, setShowIntranetButtons] = useState(true);

  const toggleAcademicButtons = () => {
    setShowAcademicButtons(!showAcademicButtons);
    setShowIntranetButtons(false);
  };

  const toggleIntranetButtons = () => {
    setShowIntranetButtons(!showIntranetButtons);
    setShowAcademicButtons(false);
  };

  return (
    <div className="">
      <div className="grid grid-cols-5 gap-4 bg-white m-3 rounded border-2 border-inherit align-middle">
      <div className="col-span-1 mt-10 sm:mt-20">
        </div>
        <div className="col-span-3 mt-4 sm:mt-20">
          <img
            src="/src/ric-logo.png"
            alt="RIC Logo"
            className="w-32 md:w-48 mx-auto "
            srcSet=""
          />
          <h1 className="text-md sm:text-2xl font-medium text-dark-800  text-center mb-5">
            Hello there, this is our{" "}
            <span className="text-indigo-500 font-bold">RIC FAQs Gpt</span> and
            this makes you easy to access the academic plan, daily life in RSU,
            etc.
          </h1>
          {/* Mobile Headers */}
          <div className=" lg:hidden mb-4 bg-indigo-200 p-2 rounded">
            <button
              onClick={toggleAcademicButtons}
              className={`${
                showAcademicButtons ? "bg-white text-green-500" : "bg-white text-green-500 hover:bg-gray-200"
              } px-2 py-2 rounded`}
            >
              Academic
            </button>{" "}
            {showAcademicButtons && (
                <div className=" rounded p-2 mb-4">
                  <a
                    className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    How much will it be cost to graduate in RSU?
                  </a>
                  <a
                    className=" m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Can I know study plan?
                  </a>
                  <a
                    className=" m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Class Schedule?
                  </a>
                  <a
                    className=" m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Exam Schedule?
                  </a>
                </div>
              )}
            <br />
            <button
              onClick={toggleIntranetButtons}
              className={`${
                showIntranetButtons ? "bg-white text-red-500" : "bg-white text-red-500 hover:bg-gray-200"
              } px-2 py-2 rounded mt-2`}
            >
              Intranet System
            </button>
            {showIntranetButtons && (
                <div className=" rounded p-1 mb-4">
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    How to log in Intranet?
                  </a>
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    What is username?
                  </a>
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    How to pay academic fee?
                  </a>
                </div>
              )}
          </div>

        {/* Desktops Headers */}
          <div className="hidden lg:block sm:visible bg-indigo-200 p-2 rounded">
            <div className="">
              <button
                className={`${
                  showAcademicButtons
                    ? "bg-white text-indigo-500 m-2"
                    : "bg-gray-300"
                } px-4 py-2 rounded mb-2`}
              >
                {" "}
                Academic Plan
              </button>{" "}
              {showAcademicButtons && (
                <div className=" rounded p-2 mb-4">
                  <a
                    className="invisible sm:visible py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    How much will it be cost to graduate in RSU?
                  </a>
                  <a
                    className="invisible sm:visible m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Can I know study plan?
                  </a>
                  <a
                    className="invisible sm:visible m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Class Schedule?
                  </a>
                  <a
                    className="invisible sm:visible m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 "
                    href="#"
                  >
                    Exam Schedule?
                  </a>
                </div>
              )}
              <button
                className={`${
                  showIntranetButtons
                    ? "bg-white text-green-500 m-2"
                    : "bg-gray-300"
                } px-4 py-2 rounded mb-2`}
              >
                {" "}
                Intranet System
              </button>
              {showIntranetButtons && (
                <div className=" rounded p-1 mb-4">
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    How to log in Intranet?
                  </a>
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    What is username?
                  </a>
                  <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-dark-300 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    How to pay academic fee?
                  </a>
                </div>
              )}
            </div>
           
          </div>
          <div className="sm:mt-52 mt-1 mx-auto">
            <form className="mt-8 sm:flex sm:items-center">
              <div className="w-full  mx-auto">
                <input
                  type="text"
                  name="question"
                  id="message"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                  placeholder="Ask question here"
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:ml-3 sm:mt-0 sm:w-auto"
              >
                Send
              </button>
            </form>
            <p className="text-center text-sm my-3 text-gray-600">
              This is ai generated answers so it may be inaccurate sometimes but
              for more information, RIC office will be at 2nd floor, building
              11.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
