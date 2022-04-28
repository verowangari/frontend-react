
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
       
        {/* <PrivateRoute path='/' element={<Homepage/>} /> */}
        <Route path='/' component={< PrivateRoute element={Homepage}/>} />
        {/* <Route exact path='/' element={<PrivateRoute component={Homepage}/>}/> */}
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
