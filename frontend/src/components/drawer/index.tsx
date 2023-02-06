import React from "react";
import OrderCard from "../OrderCard";
import Invoice from "../Invoice";
import { SelectedProduct } from "../../containers/Home";

type Props = {
  toggle: boolean;
  productList: Array<SelectedProduct>;
  setToggle: (toggle: boolean) => void;
  onRemoveClick: (productId: string) => void;
};

const Drawer: React.FC<Props> = ({
  toggle,
  productList,
  onRemoveClick,
}) => {

  return (
    <>
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
          {productList.map((p) => (
            <OrderCard key={p.id} product={p} onRemoveClick={onRemoveClick} />
          ))}
        </div>
        <Invoice price={productList.map((product) => product.price).reduce((a, price) => a + Number(price),0)} />
      </div>
    </>
  );
};
export default Drawer;
