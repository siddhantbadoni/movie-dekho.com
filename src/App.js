import MovieSummary from "./components/MovieSummary";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="movies-section">
        <MovieList />
        <MovieSummary />
      </div>
    </>
  );
}

export default App;
