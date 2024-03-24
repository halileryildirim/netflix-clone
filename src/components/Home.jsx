import Navbar from "./Navbar";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Banner />
            <Category title={"Netflix'te Popüler"} info={{type:"movie", trend:"popular"}} />
            <Category title={"Sürükleyici Diziler"} info={{type:"movie", trend:"top_rated"}}/>
            <Category title={"Yeni Çıkanlar"} info={{type:"movie", trend:"upcoming"}} />
            <Category title={"En Çok Arananlar"} info={{type:"tv", trend:"popular"}} />
            <Category title={"Amerikan Dizileri"} info={{type:"tv", trend:"top_rated"}} />
            <Footer></Footer>
        </div>
    )
}

export default Home;