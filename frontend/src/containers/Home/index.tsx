import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Pill from "../../components/Pill";
import Drawer from "../../components/drawer";
import SearchButton from "../../components/SearchButton";

export interface Product {
  id: string;
  productName: string;
  stock: number;
  price: number;
}
export type SelectedProduct = {
  id: string;
  productName: string;
  stock: number;
  price: number;
};
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //  * product drawer logic
  const [toggle, setToggle] = React.useState(false);
  const [selectedProducts, setSelectedProducts] = React.useState<
    Array<SelectedProduct>
  >([]);
  const token = localStorage.getItem("token");

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    methods: "GET",
    headers: myHeaders,
  };
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/products", requestOptions)
      .then((res) => res.json())
      .then((json) =>
        setProducts(json.data.map((i: any) => ({ ...i, id: i._id })))
      );
  });
  useEffect(() => {
    if (selectedProducts.length === 0) {
      setToggle(false);
    }
  }, [selectedProducts]);
  return (
    <div>
      <div className="flex flex-col">
        <div className="text-center px-4 py-2">
          <div className="flex flex-row">
            <p className="text-3xl font-black font-sans text-blue-800 text-left">
              K-Link
            </p>
            <div className="flex flex-1"></div>
            <SearchButton />
          </div>
          <Drawer
            productList={selectedProducts}
            toggle={toggle}
            setToggle={(toggle) => setToggle(toggle)}
            onRemoveClick={(id) => {
              console.log(id);
              setSelectedProducts(selectedProducts.filter((i) => i.id !== id));
            }}
          />
        </div>
        <div className="px-4 py-2 flex flex-grow overflow-x-auto">
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
          <Pill></Pill>
        </div>
        <div className="text-center bg-white-600 p-4">
          <div className="flex items-center justify-start flex-wrap">
            {products.map((p) => (
              <Card
                key={p.id}
                productName={p.productName}
                price={p.price}
                onClick={() => {
                  if (!selectedProducts.some((prd) => prd.id === p.id)) {
                    console.log([...selectedProducts, p]);
                    setSelectedProducts([...selectedProducts, p]);
                    setToggle(true);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// const sendRequest = useCallback(async () => {
//   if (isSending) return;
//   setIsSending(true);
//   const response = await API("http://localhost:8000/api/v1/login", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`
//     },
//   });

// }, [isSending]);
