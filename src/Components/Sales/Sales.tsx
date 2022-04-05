import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { GoMail, GoInfo } from "react-icons/go";
import { FcDownload, FcPrint } from "react-icons/fc";

const Sales = () => {
  return (
    <>
      <div className="Border">
        <div className="col p-2 d-flex flex-row justify-content-between align-items-center">
          <div className="mx-2"><h1>Sales</h1></div>
          <div className="d-flex flex-row px-4">
              <div title="Download as PDF" className="px-2 sales-opt"><FcDownload size={30} /></div>
              <div title="Print" className="px-2 sales-opt"><FcPrint size={30} /></div>
          </div>
        </div>
        <div className="col-10 mx-auto text-center Border">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><p className="table-opt">Handle</p></th>
                <th scope="col"><p className="table-opt">#</p></th>
                <th scope="col"><p className="table-opt">First</p></th>
                <th scope="col"><p className="table-opt">Last</p></th>
                <th scope="col"><p className="table-opt">Handle</p></th>
                <th scope="col"><p className="table-opt">Actions</p></th>
                <th scope="col"><p className="table-opt">Price</p></th>
                <th scope="col"><p className="table-opt"># of Items</p></th>
                <th scope="col"><p className="table-opt">Status</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>#</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>#</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>#</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td><GoInfo size={20} />&nbsp;<GoMail size={20} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6 mx-auto my-2 text-center">
          <button className="btn m-2">
            <GrLinkPrevious />
            &nbsp;Previous
          </button>
          <button className="btn m-2">
            Next&nbsp;
            <GrLinkNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sales;
