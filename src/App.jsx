import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Login, Signup, Hotflix } from "./pages"
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Hotflix />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
