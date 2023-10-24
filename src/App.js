import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
      <div className="App">
        <TodoList />
      </div>
      <Toaster position='bottom-right'/>
    </> 
  );
}

export default App;
