import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonAtom, H1Atom } from './components';

function App() {
  const [imgs, setImgs] = useState([]);
  const [breed, setBreed] = useState(null);

  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(res => setImgs(res.data.message));
  }, [breed])

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(res => setList(Object.keys(res.data.message)));
  }, [])

  return (
    <div className>
      <h1><strong>DOGS</strong></h1>
      <div style={{display: "flex"}}>
      <ul>
        {list.map(race => <li onClick={() => setBreed(race)}>{race}</li>)}
      </ul>

      <ul>
        {imgs.map(img => <li><img src={img}></img></li>)}
      </ul>
    </div>
    </div >
  );
}

export default App;
