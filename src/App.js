import './App.css';
import {Route, Routes, Link} from "react-router-dom";
import MainPage from "./page/MainPage";
import ListPage from "./page/ListPage";
import NewsPage from "./page/NewsPage";
function App()  {

    return (
        <div className="app">

            <div className='header'>
                <Link className='text' to="/" >Main Page</Link>
                <Link className='text' to="/list" >List Page</Link>
                <Link className='text' to="/news" >News Page</Link>
            </div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                    <Route path="/list" element={<ListPage />} />
                        <Route path="/news" element={<NewsPage />} />
            </Routes>
        </div>
    )
}
export default App;
