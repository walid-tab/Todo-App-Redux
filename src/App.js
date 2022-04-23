import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import './App.css'


function App() {
  return (
    <div className="app">
       <h1 className='app-title'>
         Todo App Redux
       </h1>
     <AddTodo/>
     <TodoList/>
    </div>
  );
}

export default App;
