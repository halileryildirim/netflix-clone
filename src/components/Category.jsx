import API from "./API";

const Category = ({ title, info }) => {
    const data = API(info);
    return (
        <div className="category-container">
            <h1>{title}</h1>
            <div className="content-slider">
                {data && data.map((content) => (
                    <img style={{maxWidth:"100px", maxHeight:"100px"}} key={content.id} src={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`} />
                ))}
            </div>
        </div>
    )
}

export default Category;