import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './components/Login';
import { Task } from './components/Task';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/tasks' element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;
