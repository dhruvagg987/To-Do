import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };
  // new
  componentDidMount() {
    this.getTodos();
  }
  // new
  getTodos() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        this.setState({ todos: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        {this.state.todos.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1> <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}
export default App;

// // Mock data check............
// const list = [
//   {
//     id: 1,
//     title: "1st todo",
//     body: "Learn Django properly.",
//   },
//   {
//     id: 2,
//     title: "Second item",
//     body: "Learn Python.",
//   },
//   {
//     id: 3,
//     title: "Learn HTTP",
//     body: "It's important.",
//   },
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { list };
//   }
//   render() {
//     return (
//       <div>
//         {this.state.list.map((item) => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <p>{item.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }
// export default App;

// //DEFAULT...............
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
