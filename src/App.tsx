import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
