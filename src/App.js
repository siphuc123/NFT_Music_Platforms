import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAll from "./ListAll";
import { Home, Profile, Item, Create, Login, Register } from "./pages";
import { Navbar, Footer } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import GetDetails from "./GetDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route path="/home" element={<Home />} />
          <Route path=":item/:id" element={<Item />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-details" element={<GetDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
