import axios from "./axios";
import { useEffect, useState } from "react";
import "../styles/Category.css";
import { useList } from "./ListContext";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

const Category = ({ title, fetchUrl }) => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(0);
  const { addToList } = useList();

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

  function handleFavorite(item) {
    addToList(item);
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
              <div key={content.id} className="content-card">
                <img
                  className="row-poster"
                  src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                  alt={content.name}
                ></img>
                <div className="item-info">
                  <h4>{content.name}</h4>
                  <p>{content.overview}</p>
                  <div className="info-buttons">
                    <svg
                      style={{ width: "36px", height: "36px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      onClick={() => handleFavorite(content)}
                      style={{ width: "36px", height: "36px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      style={{ width: "36px", height: "36px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
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
