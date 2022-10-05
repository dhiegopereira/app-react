import {BrowserRouter , Routes , Route} from 'react-router-dom';

import App from './App';
import Create from './pages/Create';
import List from './pages/List';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/create" element={<Create />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}
