import './App.css';
import Header from "./components/header.js";
import { Todos } from "./components/todos.js";
import { Todoitem } from "./components/todoitem.js";
import { Footer } from './components/footer';

function App() {
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo ",todo);

  }
  let todos = [{
    "sno": 1,
    "title": "Go to the market",
    "desc": "You need to go to the market to get this job done"
  },
  {
    "sno": 2,
    "title": "Go to the mall",
    "desc": "You need to go to the mall to get this job done"
  },
  {
    "sno": 3,
    "title": "Go to the school",
    "desc": "You need to go to the school to get this job done"
  },
  ]
  return (
    <>
      <Header title="My To Do List" searchbar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Todoitem /> */}
      <Footer />

    </>
  );
}

export default App;
