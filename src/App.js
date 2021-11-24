import './App.css';
import Doctors from './Components/Doctors/Doctors';
import Header from './Components/Header/Header';
import background from './Images/Background.jpg'

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <Header></Header>
      <Doctors></Doctors>
    </div>
  );
}

export default App;
