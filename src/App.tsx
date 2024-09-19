import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./components/Pages/Home";

const App: React.FC = () => {
  return (
    <main className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
