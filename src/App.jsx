import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videoss from './components/Videoss';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videoss />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
