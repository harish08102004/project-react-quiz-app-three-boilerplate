import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomeComponent from './components/HomeComponents';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/Result" element={<ResultComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;