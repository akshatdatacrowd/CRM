import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Index from "./Components/Index";
import Sales from "./Components/Sales/Sales";
import Footer from "./Components/Footer";
import Inventory from "./Components/Inventory/Inventory";
import Leads from "./Components/Leads/Leads";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/leads" element={<Leads />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
