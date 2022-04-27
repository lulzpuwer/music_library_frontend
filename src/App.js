import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SongLibrary from './song_library';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    getAllSongs();
  },[]);


  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/')
    setSongs(response.data)
  }



  return (
    <div className="App">
      <SongLibrary songs={songs}/>
    </div>
  );
}

export default App;
