import React from "react";
import { SelectedProduct } from "../../containers/Home";
type ProductProps = {
  product: SelectedProduct;
  onRemoveClick?: (productId:string)=>void;
};
const OrderCard: React.FC<ProductProps> = ({ product, onRemoveClick, }) => {
  let [count, setCount] = React.useState(1)
  const add =() => {
    if (count >= 1) {
      count = count + 1
    } else {
      count = 1
    }
    setCount(count)
  }
  const minus =() => {
    if (count > 1) {
      count = count - 1
    }
    setCount(count)
  }
  return (
    <>
      <div className="flex text-center m-2 pb-2">
        <img
          className="rounded-lg text-left w-24 h-24"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt=""
        />

        <div className="text-blue-800 p-2 text-right">
          <p className=" mb-2 text-black text-sm">{product.productName}</p>
          <div className="font-semibold">
            <div className="inline-flex mr-2">
              <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 m-0 border border-blue-500 hover:border-transparent rounded-l" onClick={minus}>
                -
              </button>
              <p className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 m-0 border border-blue-500 hover:border-transparent">
                {count}
              </p>
              <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 m-0 border border-blue-500 hover:border-transparent rounded-r" onClick={add}>
                +
              </button>
            </div>
            <span className="text-sm">Ks</span> {product.price}
          </div>
        </div>
        <div className="text-center align-middle h-full" onClick={() => onRemoveClick?.(product.id)}>&times;</div>
      </div>
    </>
  );
};

export default OrderCard;
