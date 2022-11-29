import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Flight from './pages/checkout/Flight';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<List />} />
          <Route path="/flights/:id" element={<Flight />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
