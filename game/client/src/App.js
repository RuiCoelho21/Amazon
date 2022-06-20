import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Start from './components/pages/Start';
import Board from './components/pages/Board'


const App = () => (
    <Router>
        <Routes>
        <Route path='/start' element={<Start />} />
        <Route path='/game' element={<Board/>} />
        </Routes>
    </Router>
)
 
export default App