import Banner from "./Banner";
import Category from "./Category";
import Navbar from "./Navbar";
import requests from "./requests";

const Series = () => {
  const billboard = {
    image:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABehm9LQx0cTD7OEIgEsNkJ8_cXf-2ZnsYaUwWzzgziq4KXOx27BgMXY8Uohotz8vBTjpiFyoLyuIHYsF77E_qySbZEnD3DW-cSwi.jpg?r=069",
    logo: "https://occ-0-7289-2706.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWiFT4xnmSofghq5HBSsv5s69A7ayeAwl1R2awN7tCBvMy84-Kv_H61DOGlD_nqEcDcq4W7VWseS93DHgOHMXPG4ldAsfvj_diSoxZDX1iHf.webp?r=797",
    summary:
      "Bu popüler sitcom 1990'ların Manhattanı'nda iş hayatının, aşkın ve gündelik yaşamın zorluklarıyla uğraşan 20'li yaşlardaki altı arkadaşın komik maceralarını anlatıyor.",
    rating: "13+",
  };

  return (
    <div className="seriesPage">
      <Navbar></Navbar>
      <Banner
        background={billboard.image}
        logo={billboard.logo}
        summary={billboard.summary}
        rating={billboard.rating}
      ></Banner>
      <Category
        title={"Aksiyon Dizileri"}
        fetchUrl={requests.fetchActionSeries}
      />
      <Category
        title={"Anime ve Çizgi Filmler"}
        fetchUrl={requests.fetchAnimationSeries}
      />
      <Category title={"Dram Dizileri"} fetchUrl={requests.fetchDramaSeries} />
      <Category
        title={"Komedi Dizileri"}
        fetchUrl={requests.fetchComedySeries}
      />
      <Category title={"Suç Dizileri"} fetchUrl={requests.fetchCrimeSeries} />
      <Category
        title={"Fantastik Diziler"}
        fetchUrl={requests.fetchFantasySeries}
      />
      <Category
        title={"Batı Yapımı Diziler"}
        fetchUrl={requests.fetchWesternSeries}
      />
      <Category
        title={"Gizem Dizileri"}
        fetchUrl={requests.fetchMysterySeries}
      />
    </div>
  );
};

export default Series;
