const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#">NETFLIX</a>
            <div className="navbar-link-list">
                <ul>
                    <li><a href="#">Ana Sayfa</a></li>
                    <li><a href="#">Diziler</a></li>
                    <li><a href="#">Filmler</a></li>
                    <li><a href="#">Listem</a></li>
                    <li><a href="#">Yeni ve Popüler</a></li>
                    <li><a href="#">Dile Göre Göz At</a></li>
                </ul>
            </div>
            <div className="navbar-icons">
                <ul>
                    <li><a href="#">Search Icon</a></li>
                    <li><a href="#">Notification</a></li>
                </ul>
            </div>
            <a href="#">Profile</a>
            <button>Profile List</button>
        </div>
    )
}

export default Navbar;