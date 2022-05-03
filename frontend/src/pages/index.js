import { useEffect } from 'react';
import axios from 'axios';

const App =()=> {
  const fetchNotes=async()=>{
    const data=await axios.get('/api/notes');
  }
  useEffect(()=>{
    fetchNotes();
  },[])
return <div>This is the main page<a href='/profile'>take me to profile</a></div>}

export default App;
