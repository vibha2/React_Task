import React from "react";
import Table from "react-bootstrap/Table";

function Home() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Task to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Build a Todo List Application</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Create a Searchable List with Debouncing</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Form Validation</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Implement a Counter with useReducer</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Build a Responsive Navbar</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Display Data in a Table with Sorting and Pagination</td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              Fetch and Display Data with Error Handling and Loading States
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Drag and Drop List Items</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
