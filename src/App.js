import './App.css';
import SignUp from './component/signup.js'
import Login from './component/login.js'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
