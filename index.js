import React from "react";
import {Link} from "react-router-dom";
import "./success.css";

const Success = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    window.location.href="/";
  };

  const logout_func=(e)=>{
    localStorage.clear();
// you can also like localStorage.removeItem('Token');
    window.location.href = "/login";
  }
  //let history = useHistory();
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-left">
          <h1>PAT DEL</h1>
          <span onClick={logout_func} className="logout_class">Log Out !!</span>
          
        </div>
        <div className="dashboard-right">
          {/* <h1><u classNameName="heading">SEARCH TYPE SELECTION</u></h1> */}
          <div className="card-container">
            <div className="card">
              <div className="container">
              <Link to="/provisional">{"<--"}</Link>
                <b>Success</b>
                <br />
                <br />
                <br />
                <p>lorem Ipsum is simply dummy text</p>
                <form className="form-main9" action="" onSubmit={handleSubmit}>
                  <div className="btn-div9">
                    <button type="submit" className="btn btn-primary">
                      OK
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
