import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes";
import { GetBackground } from "./components/get-background/get-background";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <GetBackground />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
