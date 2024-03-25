import Navbar from "./Navbar";
import Banner from "./Banner";
import Category from "./Category";
import requests from "./requests";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <Category
        title={"Netflix'te Popüler"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Category title={"Gündemdekiler"} fetchUrl={requests.fetchPopular} />
      <Category title={"Yeni Çıkanlar"} fetchUrl={requests.fetchTrends} />
      <Category
        title={"Eleştirmenden Tam Not Alanlar"}
        fetchUrl={requests.fetchTopRated}
      />
      <Category
        title={"Aksiyon Filmleri"}
        fetchUrl={requests.fetchActionMovies}
      />
      <Category
        title={"Komedi Filmleri"}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Category
        title={"Korku Filmleri"}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Category
        title={"Romantik Filmler"}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Footer></Footer>
    </div>
  );
};

export default Home;
