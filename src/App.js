
import './App.css'
import "@fontsource/fira-sans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import JobDetails from './Pages/Job_details/JobDetails';
import Header from './Components/Header/Header'
import Form from './Pages/Form/Form';
function App() {
  return (
    <>
    
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/details" element={<JobDetails/>} />
       <Route exact path='/applyjob' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
