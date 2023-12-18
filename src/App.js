
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEvent from './events/AddEvent';
import EditEvent from './events/EditEvent';
import ViewEvent from './events/ViewEvent';



function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/AddEvent" element={<AddEvent/>} />
        <Route exact path="/EditEvent/:id" element={<EditEvent/>} />
        <Route exact path="/ViewEvent/:id" element={<ViewEvent/>} />
      </Routes>
      
      </Router>

      
      
    </div>
  );
}

export default App;
