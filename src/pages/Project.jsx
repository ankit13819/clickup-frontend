import "./Project.css";
const Project = () => {
  return (
    <div className="main">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Points</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
          <td>$150</td>
        </tr>
        <tr>
          <td>Joe</td>
          <td>Swanson</td>
          <td>$300</td>
        </tr>
        <tr>
          <td>Cleveland</td>
          <td>Brown</td>
          <td>$250</td>
        </tr>
      </table>
    </div>
  );
};

export default Project;
