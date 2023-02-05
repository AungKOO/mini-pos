import React from "react";

type ProductProps = {
  productName: string;
  price: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const Card: React.FC<ProductProps> = ({ productName, price,onClick }) => {
  
  return (
    <>
      <div className="rounded-lg text-left w-1/5 m-2 shadow" onClick={onClick}>
        <img
          className="rounded-lg"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt=""
        />

        <div className="text-blue-800 p-2">
          <p className=" mb-2 text-black">{productName}</p>
          <p className="font-semibold text-lg">
            <span className="text-sm">Ks</span> {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
