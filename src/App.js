
import './App.css'
import "@fontsource/fira-sans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import JobDetails from './Pages/Job_details/JobDetails';
import Header from './Components/Header/Header'
import Form from './Pages/Form/Form';
import { useState, useEffect } from "react";

function App() {
  const [spinner, setSpinner] = useState(true);

    useEffect(() => {
      setTimeout(() => setSpinner(false), 3000);
  
    }, []);
  return (
    <>
      {
        spinner ?
          <div  className='animate__animated animate__zoomIn animate__delay-1s cntr'>
            <img src='hrp.png' alt='' />
          </div>
          :
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
      }
   
   
    </>
  );
}

export default App;
