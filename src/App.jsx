
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./container/homePage/index"
import Profile from "./container/profile";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
