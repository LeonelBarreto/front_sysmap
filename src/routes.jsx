import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Pages/Post';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
        </Routes>
    );
};

export default MainRoutes;