const Leads = () => {
  return (
    <>
      <div className="col Border">
        <div className="d-flex flex-row justify-content-between mt-2">
          <div><h2>Leads Management</h2></div>
          <div className="d-flex flex-row">
              <p className="LeadsOpt">All</p>
              <p className="LeadsOpt">Completed</p>
              <p className="LeadsOpt">All</p>
          </div>
        </div>
        <div className="d-flex flexrow justify-content-between">
            <div></div>
          <div className="UpcomingCalls">
            <h3 className="text-center mb-2">Upcoming Calls</h3>
            <div>
              <table className="table-hover table-bordered text-center table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
