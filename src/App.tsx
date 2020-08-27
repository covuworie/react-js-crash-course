import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import Todos from "./components/Todos";
import Todo, { ITodoData, ITodo } from "./models/Todo";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios, { AxiosResponse } from "axios";

import "./App.css";

export default class App extends Component {
  public state = {
    todos: [] as ITodo[],
  };

  public render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(_: RouteComponentProps) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

  public componentDidMount = () => {
    const todos = [] as ITodo[];
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res: AxiosResponse<ITodoData[]>) => {
        res.data.forEach((datum) =>
          todos.push(new Todo(datum.id, datum.title, datum.completed))
        );
        this.setState({ todos: todos });
      });
  };

  private toggleComplete = (id: string) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.toggleComplete();
        }
        return todo;
      }),
    });
  };

  private deleteTodo = (id: string) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((_: AxiosResponse<ITodoData>) => {
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
      });
  };

  private addTodo = (title: string) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res: AxiosResponse<ITodoData>) => {
        this.setState({
          todos: [
            ...this.state.todos,
            new Todo(res.data.id, res.data.title, res.data.completed),
          ],
        });
      });
  };
}
