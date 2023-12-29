import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
}

const productsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: Products) => {
  <div>
    <h1>{title}</h1>
    <h2>{price}</h2>
    <h3>description</h3>
    <p>category</p>
    <image values={image} />
  </div>;
};

const Shop = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fakeApi = async () => {
      try {
        const response = await fetch("http://fakestoreapi.com/products");
        if (!response.ok) {
          console.log("sorry");
        }
        const resJson = response.json();
        console.log(resJson);
      } catch (error) {
        console.error("კიდევ რომ სცადო მაინც არ გამოვა");
      }
    };
    fakeApi();
  }, []);

  return (
    <div>
      <h1>this is shop page</h1>
    </div>
  );
};

export default Shop;
