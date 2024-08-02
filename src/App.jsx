import NotesPage from "./pages/NotesPage";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <h1>Welcome to Stikyy</h1>
      {/* <NotesPage /> */}
    </div>
  );
};

export default App;
