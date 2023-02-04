import React from "react";

const Card = () => {
  return (
    <>
      <div className="rounded-lg text-left w-1/5 m-2 shadow ">
        <a href="#!">
          <img
            className="rounded-lg"
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div className="text-blue-800 p-2">
          <p className=" mb-2 text-black">
          Couple Shoes 2021 New One Man and One Woman Spring Korean
          </p>
          <p className="font-semibold text-lg"><span className="text-sm">Ks</span> 3,000</p>
        </div>
      </div>
    </>
  );
};

export default Card;
