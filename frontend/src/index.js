import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from './screens/Profile';

const rootElement = document.getElementById("root");
render(<BrowserRouter>
  <Routes>
    <Route path='/' exact element={<App />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
</BrowserRouter>, rootElement);