import React from "react";

const SongLibrary = (props) => {
  return (
    <div>
      <h2>Table of songs!</h2>
      <table className= 'songsTable'>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release date</th>
            <th>Genre</th>
          </tr>
          {props.songs.map((song)=>(
            <tr key= {song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SongLibrary;