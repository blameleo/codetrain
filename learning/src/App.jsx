import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import Form from "./components/Form";
import FormClass from "./components/FormClass";

function App() {
  return (
    // <Router>
    //  <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
  
    // </Router>

    <div>
      {/* <Counter /> */}
      {/* <Form/> */}
      <FormClass/>
    </div>

  );
}

export default App;
