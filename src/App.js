import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './comp/Nav';
import Home from './Home';
import Footer from './Footer';
import Login from './comp/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
