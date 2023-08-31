import { BrowserRouter as Router, Routes, Route, link } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage'


function App() {
    return (
  
       <div className='App' style={{ backgroundColor: 'rgb(13, 188, 28)' }}>
            <Header />
            <Router>
        <nav>
          <ul>
            <li><Link to={`${process.env.PUBLIC_URL}/chalet`}>Homepage</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/chalet/contact`}>Contact</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/chalet/directory`}>Directory</Link></li>
            <li><Link to={`${process.env.PUBLIC_URL}/chalet/about`}>About</Link></li>
          </ul>
        </nav>
        </Router>
            <Routes>
                <Route path='/chalet' element={<HomePage />} />
                <Route path='/chalet/contact' element={<ContactPage />} />
                <Route path='/chalet/directory' element={<CampsitesDirectoryPage />} />
                <Route path='/chalet/directory/:campsiteId' element={<CampsiteDetailPage />}/>
                <Route path='/chalet/about' element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>

    );
}

export default App;