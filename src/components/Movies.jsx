import Banner from "./Banner";
import Category from "./Category";
import Navbar from "./Navbar";
import Footer from "./Footer";
import requests from "./requests";

const Movies = () => {
  const billboard = {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABarPUN0hHU86yIrm-7jgC0J84sg5bBpa2wl2EMOkY501wNKUzCIhPQcU0mbOJGAVJ009zfmkPDEmuisu7dQrAk_V3OdFiUp9cJzA.jpg?r=824",
    logo: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfWkwe0jdw5GZT3yT5IFiJdipl8yopsqO3jl7nor1FYPZsDuBJjbxOvcD5iKeFDaFDUF7wpbsLwDRDzXnGvuDQITOcHn-kTg2_ZsXDSIIvoO.png?r=a93",
    summary:
      "Hayata dair inancını yitirmiş bir ofis çalışanı, gizemli yeni dostu Tyler Durden'la kurduğu gizli topluluk sayesinde, bastırılmış duygularını açığa vurma fırsatı yakalar.",
    rating: "18+",
  };

  return (
    <div className="moviesPage">
      <Navbar></Navbar>
      <Banner
        background={billboard.image}
        logo={billboard.logo}
        summary={billboard.summary}
        rating={billboard.rating}
      />
    </div>
  );
};

export default Movies;
