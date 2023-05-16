import Card from "./Components/Card/Card";
import './App.css'
import { data } from "./Data";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className='container row m-auto my-5'>
        {data.map((item, i) => (
          <div key={i} className=' col-md-3 col-sm-12 my-3'>
            <Card job_title={item.title} job_date={item.date} stack1={item.stack1} stack2={item.stack2} job_exp={item.exp} job_desc={item.desc} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
