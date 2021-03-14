import "./App.css";
import Row from "./Components/Movie_Row/Row";
import request from "./request";
import Banner from './Components/Banner/Banner'
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={request.fetchNetflixOriginal}
        isOpen={true}
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      {/* <Row title="" fetchURL=""/>
      <Row title="" fetchURL=""/> */}
      {/* <Row title='Trending Now' fetchURL={request.fetchTrendingNow}   /> */}
      {/* <Row title='Action Movies' fetchURL={request.fetchActionMovies}   /> */}
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Horor Movies" fetchURL={request.fetchHorrorMovies} />
      <Row
        title="Documentary Movies"
        fetchURL={request.fetchDocumentaryMovies}
      />
      {/* <Row title='Latest Movies' fetchURL={request.fetchLatest}   /> */}
      <Footer/>
    </div>
  );
}

export default App;
