import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotesState from './context/notes/NotesState';
import CreateNote from './components/CreateNote';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <>
      <AuthState>
        <NotesState>
          <Router>
            <Navbar />
            <div className='container my-5 mt-5' style={{ paddingTop: "40px" }}>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/createNote' element={<CreateNote />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/login' element={<LogIn />} />
              </Routes>
            </div>
          </Router>
        </NotesState>
      </AuthState>
    </>
  );
}

export default App;
