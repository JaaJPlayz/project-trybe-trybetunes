import { Routes, Route } from 'react-router-dom'
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/search' element={<Search />} />
      <Route path='/album/:id' element={<Album />} />
    </Routes>
  );
}

export default App;
