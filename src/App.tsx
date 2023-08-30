import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
import Layout from './components/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="search" element={ <Search /> } />
        <Route path="album/:id" element={ <Album /> } />
      </Route>
      <Route index element={ <Login /> } />
    </Routes>
  );
}

export default App;
