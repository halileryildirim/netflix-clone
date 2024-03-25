import axios from "./axios";
import { useEffect, useState } from "react";

const Category = ({ title, fetchUrl }) => {
    const [content, setContent] = useState([]);

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

    }, [fetchUrl])

    return (
        <div className="category">
            <h2>{title}</h2>
            {content && content.map((content) => (
                <img key={content.id} src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`} alt={content.name}></img>
            ))}
        </div>
    )
}

export default Category;