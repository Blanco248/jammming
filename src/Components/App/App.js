import React from 'react';
import './App.css';
import SearchBar from '../SearchBar'
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {
          name: "Example Track Name",
          artist: "Example Track Artist",
          album: "Example Track Album",
          id: 1,
        },
        {
          name: "Example Track Name 2",
          artist: "Example Track Artist 2",
          album: "Example Track Album 2",
          id: 2,
        }
      ],
      playlistName: "Example Playlist",
      playlistTracks: [
        {
          name: "Playlist Track Name",
          artist: "Playlist Track Artist",
          album: "Playlist Track Album",
          id: 3,
        },
        {
          name: "Playlist Track Name",
          artist: "Playlist Track Artist",
          album: "Playlist Track Album",
          id: 4,
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
