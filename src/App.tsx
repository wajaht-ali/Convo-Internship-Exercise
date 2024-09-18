import { Outlet } from "react-router-dom";
// import Home from "./components/Pages/Home";

const App: React.FC = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default App;
