import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

export default function ShopPages() {
  let url = " https://fakestoreapi.com/products";
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let data = res.data;

        setProduct(data);
      })
      .catch(() => {
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center overflow-auto py-5 gap-3 bg-blue-500">
      <h1 className="text-2xl font-bold">All Products</h1>

      <div className="container grid grid-cols-3 gap-4">
        {product.map((el) => {
          return (
            <div key={el.id} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img className="w-50"  src={el.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.title}</h2>
                <p>{el.price}</p>
                <div className="card-actions justify-end">
                  <Link to={"/shop/product/" + el.id} className="btn btn-primary">Buy Now</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
