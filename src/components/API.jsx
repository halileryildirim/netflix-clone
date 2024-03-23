import { useState } from "react";
import { useEffect } from "react"

const API = () => {
    const [api, setApi] = useState(null);
    const url = 'https://api.themoviedb.org/3/movie/11?api_key=cd48b9b030580909fcce753d6fde8a06';
    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setApi(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAPI();
    }, [])
    console.log(api);
}

export default API;

