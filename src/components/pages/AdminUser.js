import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";

const AdminUser = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get("https://real-estate-backend-9ph8.onrender.com/admin/get-users")
      .then((res) => {
        setState(res.data.result);
      });
  }, []);

  const editUser = (id) => {
    navigate(`/admin/user/${id}`);
    // axios.get(`https://real-estate-backend-9ph8.onrender.com/admin/user/${id}`).then((res) => {
    //   setError(true);
    //   setErrorMsg(res.data.Msg);
    // });
  };
  const deleteUser = (id) => {
    axios
      .delete(
        `https://real-estate-backend-9ph8.onrender.com/admin/delete/user/${id}`
      )
      .then((res) => {
        // setError(true);
        console.log(res.data);
        setState(res.data.result);
        // setErrorMsg(res.data.Msg);
      });
  };

  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Admin User</title>
        <meta name="description" content="#" />
      </MetaTags>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Users</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table-striped table-bordered text-center"
          style={{ width: "90%", margin: "1%" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.map((res, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{res.name}</td>
                  <td>{res.email}</td>
                  <td>{res.user}</td>
                  <td>{`${res.isAdmin}`}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editUser(res._id)}
                      style={{ borderRadius: "5px" }}
                    >
                      <span className="fa fa-edit"></span>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(res._id)}
                      style={{ borderRadius: "5px" }}
                    >
                      <span className="fa fa-trash"></span>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {error ? (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              backgroundColor: "#FF3131",
              color: "white",
              padding: "10px 20px 10px 20px",
              borderRadius: "5px",
              alignItems: "center",
            }}
          >
            <span>{error ? `${errorMsg}` : ""}</span>
            <div
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                border: "white 2px solid",
                borderRadius: "30px",
                width: "40px",
                backgroundColor: "#FF3131",
                height: "40px",
              }}
              onClick={() => {
                setError(false);
              }}
            >
              <p
                style={{
                  color: "white",
                  alignItems: "center",
                  marginTop: "3px",
                }}
              >
                x
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AdminUser;
