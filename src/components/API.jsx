import { useState } from "react";
import { useEffect } from "react"

const API = () => {
    const [api, setApi] = useState([]);
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=cd48b9b030580909fcce753d6fde8a06";
    async function fetchAPI() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setApi(data.results);
            
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        fetchAPI();
    }, [])

    return {api}
}

export default API;

