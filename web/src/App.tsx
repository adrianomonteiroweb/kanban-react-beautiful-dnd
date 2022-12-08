import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './components/Login';
import { Task } from './components/Task';
import { Comments } from './components/Comments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/tasks' element={<Task />} />
        <Route path='/comments/:category/:id' element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
