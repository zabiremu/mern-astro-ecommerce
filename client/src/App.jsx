import { Button } from "flowbite-react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div>
          <Navbar />
            <main>
                <Home/>
            </main>
          <Footer/>
      </div>
    </>
  );
}

export default App;
