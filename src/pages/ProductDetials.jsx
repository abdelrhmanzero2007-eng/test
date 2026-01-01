import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ProductDetials() {

  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState({});

  useEffect(() => {
    let id = params.productId;
    let url = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setProduct(data);
        console.log(data);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="flex items-start justify-center w-full h-dvh bg-blue-500 flex-col gap-5 ">
      <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img className="w-50" src={product.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.price}</p>
          <div className="card-actions justify-end"></div>
        </div>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
