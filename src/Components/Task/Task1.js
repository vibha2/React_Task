import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Task1() {

    const [todos, setTodos] = useState([]);
  
  const handleApi = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        console.log("res=> ", res.data);
        setTodos(res.data);
    })
    
  };

  useEffect(() => {
    handleApi();
    console.log("hello");
  },[]);

  return (
    <div style={{ margin: "2rem" }}>
      <h5>Build a Todo List Application</h5>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            {/* <th>Status</th> */}
          </tr>
        </thead>
        <tbody>
          {todos.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              {/* <td>{value.completed}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* https://jsonplaceholder.typicode.com/todos */}
    </div>
  );
}

export default Task1;
