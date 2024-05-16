import React from "react";
import "./Categories.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Loader from "../comp/Loader";

function Products() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function handleBack() {
    navigate("/categories");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${id}`
        );
        setData(response.data.products);
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
    return <h2>Something Went Wrong</h2>;
  }

  return (
    <div className="mainBody">
      <div className="heading">
        <button onClick={handleBack}>Back</button>
        <h2>{id}</h2>
      </div>
      <div className="categories">
        {data.map((cat, idx) => {
          return (
            <div className="cat-card" key={idx}>
              <NavLink to={`/products/${cat.category}/${cat.id}`}>
                <p>{cat.title}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
