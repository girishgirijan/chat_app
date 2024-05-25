import { BrowserRouter } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex items-center justify-center p-4">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
