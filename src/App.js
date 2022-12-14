import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SocialMedia } from "./components/SocialMedia";
import { About } from "./components/About";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>

      <About/>

      <SocialMedia/>
    </div>
  );
}

export default App;
