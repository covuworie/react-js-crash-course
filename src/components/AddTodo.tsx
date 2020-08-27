import React, { Component } from "react";
import PropTypes from "prop-types";

type TAddTodo = {
  addTodo(title: string): void;
};

class AddTodo extends Component<TAddTodo> {
  // PropTypes
  public static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  public state = {
    title: "",
  };

  public render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: 10 }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}

export default AddTodo;
