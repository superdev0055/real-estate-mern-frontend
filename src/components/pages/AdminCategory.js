import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";

const AdminCategory = (props) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get("https://real-estate-backend-9ph8.onrender.com/admin/get-categories")
      .then((res) => {
        setData(res.data.result);
      });
  }, []);

  const editCategory = (id) => {
    navigate(`/admin/category/${id}`);
  };
  const deleteCategory = (id) => {
    axios
      .delete(
        `https://real-estate-backend-9ph8.onrender.com/admin/delete/category/${id}`
      )
      .then((res) => {
        setData(res.data.result);
        toast({
          title: "Success",
          description: "Category deleted successfully.",
          status: "success",
          duration: 2000,
          variant: "left-accent",
          position: "top-right",
          isClosable: true,
        });
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  const addCategory = () => {
    navigate("/admin/category/create");
  };

  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Admin Category</title>
        <meta name="description" content="#" />
      </MetaTags>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Property Categories</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          width: "94%",
          margin: "1%",
        }}
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addCategory()}
        >
          <span className="fa fa-plus"></span> Add Category
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table
          className="table-striped table-bordered text-center"
          style={{ width: "90%", margin: "1%" }}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Description</th>
              <th>Icon</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <tr>
                <td colSpan="4">No Data</td>
              </tr>
            ) : (
              <></>
            )}
            {data.map((res, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{res.name}</td>
                  <td>{res.description}</td>
                  <td>
                    <i
                      className={"flaticon-" + res.icon + ""}
                      style={{ fontSize: "30px" }}
                    ></i>
                  </td>
                  <td>
                    <img
                      src={process.env.PUBLIC_URL + "/" + res.img}
                      alt="category"
                      style={{ width: "70px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editCategory(res._id)}
                      style={{ borderRadius: "5px" }}
                    >
                      <span className="fa fa-edit"></span>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCategory(res._id)}
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

export default AdminCategory;
