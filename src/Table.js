import React from "react";

class Table extends React.Component {
  state = {
    data: [0, 1]
  };
  appendChild = () => {
    let { data } = this.state;
    data.push(data.length);
    this.setState({ data });
  };
  render() {
    return (
      <body>
        <table>
          <thead>
            <th>Id</th>
            <th>Content</th>
          </thead>
          <tbody>
            {this.state.data.map(id => (
              <Row id={id} />
            ))}
          </tbody>
        </table>
        <button
          rel="1"
          type="button"
          id="addbtn"
          className="btn btn-circle"
          onClick={this.appendChild}>Add
          <i className="fa fa-plus" />
        </button>
      </body>
    );
  }
}

const Row = ({ id }) => (
  <tr>
    <td>
      {id}
    </td>
    <td>
      Test
    </td>
  </tr>
);


export default Table;
