import './App.css';
import { Post ,Get,Delete,Put,AddEmployee} from './components';

function App() {
  return (
    <div className="App">
      <Post/>
      <Get/>
      <Delete/>
      <Put/>
      <AddEmployee/>
    </div>
  );
}

export default App;
