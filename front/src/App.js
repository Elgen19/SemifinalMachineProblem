import Homepages from './pages/Homepage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  return (
    <>
      <Routes>
  
        <Route path='/' element={<Homepages />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />

      </Routes>


    </>

  );
}

export default App;
