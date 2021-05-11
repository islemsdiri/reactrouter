
import NavBar from './Component/NavBar';
import './App.css';
import TData from './Component/Data'
import { useState } from 'react';
import { Route } from 'react-router';
import ToursList from './Component/ToursList';
import Home from './Component/Home';
import AddForm from './Component/AddForm';

function App() {
  const [Tours,setTours]=useState(TData)
  console.log(Tours);
  const [searchByName, setSearchByName] = useState("");
  return (
    <div className="App" style={{ backgroundColor: "#ff00a51f" }}>
      <header className="App-header">
      
 
      
     <NavBar setSearchByName={setSearchByName} searchByName={searchByName} />
     
    
     <Route path="/Home" component={Home}/>    
<Route path="/TourList" component={ToursList} render={()=><ToursList Tours={Tours}/>}/>
<Route path="/AddForm" component={AddForm}/>
      </header>
    </div>
  );
}

export default App;
