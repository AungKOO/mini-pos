import React from "react";
import OrderCard from "../OrderCard";

const Drawer = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onClick={() => {
          setToggle(!toggle);
          console.log(toggle);
        }}
      >
        Toggle right offcanvas
      </button>

      <div
        className={`offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white ${
          toggle ? `visible` : `invisible`
        }  bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96`}
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header flex items-center justify-between p-4">
          <h5
            className="offcanvas-title mb-0 leading-normal font-semibold"
            id="offcanvasRightLabel"
          >
            Order details
          </h5>
        </div>
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
        <OrderCard />
        </div>
        <div className="bg-indigo-100 flex flex-col">
            <div>subtotal</div>
            <div>Tax(5%)</div>
            <div>Total</div>
            <button>Pay Now</button>
        </div>
      </div>
    </>
  );
};
export default Drawer;
