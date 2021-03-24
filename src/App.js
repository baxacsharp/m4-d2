import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'
import Jumbotron from './components/Jumbotron'
import Home from'./components/Home'
function App() {
  return (
    <div>
      <NavBar title ="BaxasBook"/>  
      <Jumbotron />
      <Home />
      
      <MyFooter />

    </div>
    
  );
}

export default App;
