import PropTypes from "prop-types";
import React, { Component } from "react";
import TodoItem from "./TodoItem";
import ITodo from "../models/Todo";

export type TTodos = {
  todos: ITodo[];
  toggleComplete(id: string): void;
  deleteTodo(id: string): void;
};

class Todos extends Component<TTodos> {
  // PropTypes
  public static propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  public render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

export default Todos;
