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

const ProductsCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
}: Products) => (
  <div>
    <h1>{title}</h1>
    <h2>{price}</h2>
    <h3>{description}</h3>
    <p>{category}</p>
    <img src={image} alt={title} />
  </div>
);

const Shop: React.FC = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    const fakeApi = async () => {
      try {
        const response = await fetch("http://fakestoreapi.com/products");
        if (!response.ok) {
          console.log("sorry");
        }
        const resJson = await response.json();
        setData(resJson);
      } catch (error) {
        console.error("კიდევ რომ სცადო მაინც არ გამოვა");
      }
    };
    fakeApi();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <ProductsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Shop;
