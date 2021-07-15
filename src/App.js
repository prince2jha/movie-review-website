import "./styles.css";
import Movie from "./component/index.js";
export default function App() {
  const movies = ["1", "2", "3"];
  const FEATURED_API =
    "https://api.themoviedb.org/3/configuration?api_key=f984e9232a2baaac3c204f70a0062ef5";

  const search =
    "https://api.themoviedb.org/3/search/movie?api_key=f984e9232a2baaac3c204f70a0062ef5&language=en-US&query=%3D&page=1&include_adult=false";
  const image = "";
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}
