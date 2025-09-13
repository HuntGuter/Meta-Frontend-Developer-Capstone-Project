import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.js';
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import BookingPage from './pages/BookingPage.js';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
