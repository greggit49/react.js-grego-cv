import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./composant/Accueil.jsx";
import Blog from "./composant/Blog.jsx";
import Contact from "./composant/Contact.jsx";
import Mantion from "./composant/Mantion.jsx";
import Realisation from "./composant/Realisation.jsx";
import Service from "./composant/Service.jsx";

function App() {
  return (
    <div className="App img">
      <Routes>
        <Route path="/" element={<Accueil></Accueil>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Realisation" element={<Realisation></Realisation>} />
        <Route path="/Service" element={<Service></Service>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Mantion Legale" element={<Mantion></Mantion>} />
      </Routes>
    </div>
  );
}

export default App;
