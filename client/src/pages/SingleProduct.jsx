import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../comp/Loader";

function SingleProduct() {
  const { id, product } = useParams();
  const [fdata, setFdata] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${id}`
        );
        let newdata = response.data.products;
        let filteredData = newdata.filter(
          (item) => item.id === parseInt(product)
        );
        setFdata(filteredData);
        console.log(filteredData);
        setIsLoading(false); // Set loading state to false when data is fetched
      } catch (error) {
        setError(true);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <>
      <div className="mainSection">
        <div className="breadcrumbCstm">
          <p className="bcmb">
            {fdata[0].category} / {fdata[0].title}
          </p>
        </div>
        <div className="details-section">
          <div className="photos-section">
            {fdata && fdata.length > 0 && (
              <div className="all-images">
                {fdata[0].images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ))}
              </div>
            )}
          </div>
          <div className="desc-section">
            {fdata && fdata.length > 0 && (
              <>
                <h2>{fdata[0].title}</h2>
                <p className="desc-p">₹{fdata[0].price}</p>
                <p className="desc-p">{fdata[0].description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
