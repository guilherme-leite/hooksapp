import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import NewSongForm from './NewSong';

const SongList = () => {
  const [songs, setSongs ] = useState([
    { title: 'Like acid rain', id: 1 },
    { title: 'Diamonds', id: 2 },
    { title: '21', id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([
      ...songs,
      { title: title, id: uuid() }
    ]);
  }
  return ( 
    <div className="song-list">
      <ul>
        { songs.map( (song) => {
          return (
            <li key={song.id}>{song.title}</li>
          )
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}
 
export default SongList;