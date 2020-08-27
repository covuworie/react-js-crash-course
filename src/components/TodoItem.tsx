import PropTypes from "prop-types";
import React, { Component, CSSProperties } from "react";
import { ITodo } from "../models/Todo";

type TTodoItem = {
  key: string;
  todo: ITodo;
  toggleComplete(id: string): void;
  deleteTodo(id: string): void;
};

class TodoItem extends Component<TTodoItem> {
  // PropTypes
  public static propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  public render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.Style}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          {" " + title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }

  private get Style() {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  }
}

const btnStyle: CSSProperties = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
