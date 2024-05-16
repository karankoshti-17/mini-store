import React, { useEffect, useState } from "react";
import "./Categories.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Loader from "../comp/Loader";

function Categories() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h2>Something Went Wrong</h2>;
  }

  return (
    <div className="mainBody">
      <div className="heading">
        <h2>Categories</h2>
      </div>
      <div className="categories">
        {data.map((cat, idx) => (
          <div className="cat-card" key={idx}>
            <NavLink to={`/products/${cat}`}>
              <p>{cat}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
