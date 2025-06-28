import Athens from "./components/Athens/Athens";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Athens />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
