import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Generadores from './components/generador/Generadores';
import Reciclador from './components/reciclador/Reciclador';
import GeneradoresState from './generadores/generadoresState';
import LoginGenerador from './components/auth/LoginGenerador';
import RegistroGenerador from './components/auth/RegistroGenerador';
import LoginReciclador from './components/auth/LoginReciclador';
import RegistroReciclador from './components/auth/RegistroReciclador';


function App() {
  return (
    <GeneradoresState>
        <Router>
          <Routes>
            <Route path="logingenerador" element={<LoginGenerador/>}/>
            <Route path="registrogenerador" element={<RegistroGenerador/>}/>
            <Route path="loginreciclador" element={<LoginReciclador/>}/>
            <Route path="registroreciclador" element={<RegistroReciclador/>}/>
            <Route path="reciclador" element={<Reciclador/>}/>
            <Route path="generador" element={<Generadores/>}/>
          </Routes>
      </Router>
    </GeneradoresState>
  );
}

export default App;
