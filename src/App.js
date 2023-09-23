import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';
import Playlist from './Components/Playlist';
import SearchResults from './Components/SearchResults';


function App() {
  return (
    <>
      <SearchBar id="search"/>
      <div className="yes">
        <div className="yuh">
          <div className="results-container">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
