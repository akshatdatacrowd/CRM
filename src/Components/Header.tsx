import { Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="col d-flex flex-row justify-content-between Border">
        <div className="d-flex flex-row align-items-center m-2">
          <Link to="/">
            <h1>CRM</h1>
          </Link>
        </div>
        <div className="d-flex flex-row align-items-center">
          <p className="m-2 headerOpt">Dashboard</p>
          <p className="m-2 headerOpt">Tasks</p>
          <Link to="/sales">
            <p className="m-2 headerOpt">Sales</p>
          </Link>
          <p className="m-2 headerOpt">Campaigns</p>
          <Link to="/leads">
            <p className="m-2 headerOpt">Leads</p>
          </Link>
          <p className="m-2 headerOpt">Directory</p>
          <p className="m-2 headerOpt">Orders</p>
          <Link to="/inventory">
            <p className="m-2 headerOpt">Inventory</p>
          </Link>
          <p className="m-2 headerOpt">
            <IoSettings />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
