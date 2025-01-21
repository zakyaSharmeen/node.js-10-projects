import React from "react";

function ResultTable() {
  return (
    <div>
      <div>
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <td>Name</td>
              <td>Attemps</td>
              <td>Earn Points</td>
              <td>Result</td>
            </tr>
          </thead> 
          <tbody>
            <tr className="table-body">
              <td>Username</td>
              <td>Attempts</td>
              <td>Points</td>
              <td>Achieved</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultTable;
