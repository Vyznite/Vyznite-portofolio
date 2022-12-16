import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SocialMedia } from "./components/SocialMedia";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>

      <Portfolio/>
      <Contact/>
      <SocialMedia/>
    </div>
  );
}

export default App;
