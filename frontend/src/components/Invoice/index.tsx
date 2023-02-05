import React from "react";
import PayButton from "../PayButton";
type InvoiceProps = {
  price: number;
  onRemoveClick?: (productId: string) => void;
};
const Invoice: React.FC<InvoiceProps> = ({ price, onRemoveClick }) => {
  return (
    <>
      <div className="bg-indigo-100 flex flex-col">
        <div className="flex flex-row w-100">
          <div className="text-start ml-5 w-1/2 py-2 text-gray-500">
            subtotal
          </div>
          <div className="text-end w-1/2 mr-5 py-2  text-blue-800">
            Ks {price}
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="text-start ml-5 w-1/2 py-2 text-gray-500 ">
            Tax(5%)
          </div>

          <div className="text-end w-1/2 mr-5 py-2  text-blue-800">
            Ks {price * 0.05}
          </div>
        </div>
        <span className="text-gray-300 m-0 p-0">
          ------------------------------------------
        </span>
        <div className="flex flex-row">
          <div className="text-start w-1/2 ml-5 py-2 text-gray-500">Total</div>
          <div className="text-end w-1/2 mr-5 py-2 font-semibold text-blue-800">
            Ks {price - (price * 0.05)}
          </div>
        </div>
        <div>
          <PayButton />
        </div>
      </div>
    </>
  );
};
export default Invoice;
