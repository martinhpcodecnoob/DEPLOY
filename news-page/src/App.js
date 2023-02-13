import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Detail from './pages/Detail/Detail.jsx'
import PaginadoCategory from './pages/PaginadoCategory/PaginadoCategory.jsx'
import SearchResult from './pages/SearchResult/SearchResult.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path={'/'} element={<Home/>}/>
          <Route exact path={'/detail/:id/:category'} element={<Detail/>}/>ç
          <Route exact path={'/paginateCate/:category'} element={<PaginadoCategory/>}/>
          <Route exact path={'/search/'} element={<SearchResult/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
