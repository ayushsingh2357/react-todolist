import './App.css';
import Header from "./components/header.js";
import { Todos } from "./components/todos.js";
import { AddTodo } from "./components/addTodo.js";
// import { Todoitem } from "./components/todoitem.js";
import { Footer } from './components/footer';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { About } from "./components/About.js";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo ", todo);
    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addtodo = (title, desc) => {
    console.log("Todo added ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My To Do List" searchbar={false} />

        <Switch>
          <Route exact path="/index.html" render={() => {
            return(
            <>
              <AddTodo addtodo={addtodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
            )
          }} >
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>


        {/* <Todoitem /> */}

        <Footer />
      </Router>

    </>
  );
}

export default App;
