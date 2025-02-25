import { Outlet } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvide } from "./Context/auth.context.jsx";

function App() {
  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-Montesarrat  ">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;
