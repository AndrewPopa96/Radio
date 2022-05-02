import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App =()=> {
  const fetchNotes=async()=>{
    const data=await axios.get('/api/notes');

    console.log(data);
  }
  useEffect(()=>{
    fetchNotes();
  },[])
return <div>This is the main page<a href='/profile'>take me to profile</a></div>}
export default App;
