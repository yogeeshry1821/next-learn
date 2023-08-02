"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const DataFetch = () => {
  const router = useRouter();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
      setProduct(data.products);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={() => router.push("/")}> Go to home </button>
      <h1>data</h1>
      {product.map((item) => (
        <div key={item.id}>
          <h3>Name: {item.title}</h3>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating}</p>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200} // Set the desired width for the thumbnail
            height={150}
          />
          {/* <div>
              {item.images.map((image, index) => (
                <Image 
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                width={300} // Set the desired width for the images
                height={200} // Set the desired height for the images
                 />
              ))}
            </div> */}
        </div>
      ))}
    </div>
  );
};
export default DataFetch;
