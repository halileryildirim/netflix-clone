import Navbar from "./Navbar";
import Banner from "./Banner";
import Category from "./Category";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="homepage">
            <Navbar />
            <Banner />
            <Category title={"Netflix'te Popüler"} />
            <Category title={"Sürükleyici Diziler"} />
            <Category title={"Yeni Çıkanlar"}/>
            <Category title={"En Çok Arananlar"} />
            <Category title={"Amerikan Dizileri"} />
            <Footer></Footer>
        </div>
    )
}

export default Home;