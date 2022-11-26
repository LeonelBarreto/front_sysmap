import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Pages/Post';
import User from './Pages/User';
import Users from './Pages/Users';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<User />} />
        </Routes>
    );
};

export default MainRoutes;