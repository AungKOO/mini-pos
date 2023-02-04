import React from "react";

const OrderCard = () => {
  return (
    <>
      <div className="flex text-center m-2 pb-2">
        <img
          className="rounded-lg text-left w-24 h-24"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt=""
        />

        <div className="text-blue-800 p-2 text-right">
          <p className=" mb-2 text-black text-sm">
            Couple Shoes 2021 New One Man and One Woman Spring Korean
          </p>
          <p className="font-semibold">
            <div className="inline-flex mr-2">
              <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 m-0 border border-blue-500 hover:border-transparent rounded-l">
                -
              </button>
              <p className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 m-0 border border-blue-500 hover:border-transparent">
                1
              </p>
              <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 m-0 border border-blue-500 hover:border-transparent rounded-r">
                +
              </button>
            </div>
            <span className="text-sm">Ks</span> 3,000
          </p>
        </div>
        <div className="text-center align-middle h-full">x</div>
      </div>
    </>
  );
};

export default OrderCard;
