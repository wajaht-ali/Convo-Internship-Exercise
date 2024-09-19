import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

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
