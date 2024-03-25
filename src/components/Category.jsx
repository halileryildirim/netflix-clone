import axios from "./axios";
import { useEffect, useState } from "react";
import "../styles/Category.css";

const Category = ({ title, fetchUrl }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(0);

  function leftClickHandler() {
    if (page < 0) {
      setPage(page + 100);
    }
  }

  function rightClickHandler() {
    if (page > -300) {
      setPage(page - 100);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setContent(response.data.results);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="category">
      <div className="category-header">
        <h1>{title}</h1>
      </div>
      <div className="row-posters">
        <button
          onClick={() => leftClickHandler()}
          className="handle left-handle"
        >
          <div className="text">&#8249;</div>
        </button>
        <div className="slider" style={{ transform: `translateX(${page}%)` }}>
          {content &&
            content.map((content) => (
              <img
                className="row-poster"
                key={content.id}
                src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                alt={content.name}
              ></img>
            ))}
        </div>
        <button onClick={rightClickHandler} className="handle right-handle">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
};

export default Category;
