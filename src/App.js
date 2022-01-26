import './App.css';
import Navbar from './Components/Navbar/Navbar';

const navLinks = [{name: "About", url: "aboutURL"}, {name: "Projects", url: "projectsURL"}]
function App() {
  return (
    <div>
      <Navbar links={navLinks} />
    </div>
  );
}

export default App;
