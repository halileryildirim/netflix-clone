import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/MyList.css";

const MyList = () => {
  return (
    <div className="myList">
      <Navbar className="myListNavbar"></Navbar>
      <h1 className="myListHeader">Listem</h1>
      <div className="myList-container"></div>
      <Footer></Footer>
    </div>
  );
};

export default MyList;
