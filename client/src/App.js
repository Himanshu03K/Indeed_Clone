import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import routsPath from './routes/route';
import CreatePost from './pages/CreatePost';
import AllPosts from './pages/AllPosts';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={routsPath.home} element={<Home/>}/>
        <Route path={routsPath.create} element={<CreatePost/>}/>
        <Route path={routsPath.posts} element={<AllPosts/>}/> 

      </Routes>
    </Router>
  );
}

export default App;
