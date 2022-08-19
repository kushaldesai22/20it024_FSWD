import './App.css';
import  Student from './components/student';
import Navbar from './components/navBar';
import { Container, Form} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
     <div className="App">
      <Container>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/Addstudent" element={<Student/>}/>
        {/* <Route path="/Addstudent" component={Student}/> */}
        </Routes>
      </BrowserRouter>
      </Container>
     </div>
  );
}

export default App;
