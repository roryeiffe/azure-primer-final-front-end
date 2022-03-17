import logo from './logo.svg';
import './App.css';
import User from './components/user';
import AddUser from './components/addUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddUser />
        <User/>
      </header>
    </div>
  );
}

export default App;
