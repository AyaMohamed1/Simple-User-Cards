import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./pages/Cards";

class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({ data: result });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteUser = (index) => {
    console.log(index);
    let newState = [...this.state.data];
    newState.splice(index, 1);
    console.log(newState);
    this.setState({ data: newState });
  };

  render() {
    if (this.state.data === "undefined") {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <Cards data={this.state.data} onDelete={this.deleteUser} />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
