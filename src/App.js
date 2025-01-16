import './App.css';
import { Post ,Get,Delete,Put} from './components';

function App() {
  return (
    <div className="App">
      <Post/>
      <Get/>
      <Delete/>
      <Put/>
    </div>
  );
}

export default App;
