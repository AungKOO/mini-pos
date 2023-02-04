import React from "react";

const OrderCard = () => {
  return (
    <>
      <div className="flex text-center">
        <img
          className="rounded-lg text-left w-20 h-20"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt=""
        />

        <div className="text-blue-800 p-2 text-right">
          <p className=" mb-2 text-black">
            Couple Shoes 2021 New One Man and One Woman Spring Korean
          </p>
          <p className="font-semibold text-lg">
            <button className="inline">-</button>
            <p className="inline p-2 border-solid border-black-1">1</p>
            <button className="inline">+</button>
            <span className="text-sm">Ks</span> 3,000
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
