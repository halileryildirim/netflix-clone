import Navbar from "./Navbar";
import Banner from "./Banner";
import Category from "./Category";
import requests from "./requests";
import Footer from "./Footer";

const Home = () => {
  const billboard = {
    image:
      "https://occ-0-7290-2706.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABS1kQ3bLw61sI8nNQHftRAKuEw-TfNIAjZ2UnZKfwlSWMuc7JVGnvJiFqvkem_5adGMUswsUoJjL0zyIkyIK2QS7Cah82EJv7CKrzZDkapM.webp?r=c0d",
    summary:
      "Kanserden öleceğini öğrenen bir kimya öğretmeni, ailesinin geleceğini garanti altına almak için metanfetamin üretip satmak üzere eski bir öğrencisiyle kafa kafaya verir.",
  };
  return (
    <div className="homepage">
      <Navbar />
      <Banner image={billboard.image} summary={billboard.summary} />
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
