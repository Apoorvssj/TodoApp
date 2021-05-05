import Home from "./pages/Home";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Route path={["/addtodo", "/"]}>
        <Home />
        <ToastContainer />
      </Route>
    </div>
  );
}

export default App;
