import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import { useToast } from "@chakra-ui/react";
import icons from "./../../data/icons";

const AdminFeatureCreate = (props) => {
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onCancel = () => {
    navigate("/admin/features");
  };
  const postData = () => {
    if (name == "") {
      toast({
        title: "Error",
        description: "Name field is empty!!!",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    if (icon == "") {
      toast({
        title: "Error",
        description: "Select an Icon",
        status: "error",
        duration: 2000,
        variant: "left-accent",
        position: "top-right",
        isClosable: true,
      });
      return false;
    }
    const formData = {
      name: name,
      icon: icon,
    };
    axios
      .post(
        `https://real-estate-backend-9ph8.onrender.com/admin/feature/create`,
        formData
      )
      .then((res) => {
        navigate("/admin/features");
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Admin Feature Create</title>
        <meta name="description" content="#" />
      </MetaTags>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Feature Create</h2>
      </div>
      <div
        className="acr-user-content"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <form
          onSubmit={(e) => {
            postData();
            e.preventDefault();
          }}
          style={{
            width: "70%",
            padding: "2%",
          }}
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control form-control-light"
              placeholder="name"
              name="name"
            />
          </div>
          <div className="form-group row">
            <label className="col-md-1 col-lg-1" style={{ marginTop: "10px" }}>
              Icon :
            </label>
            <select
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              type="icon"
              className="form-control col-md-6 col-lg-6"
            >
              <option value="">Select Icon</option>
              {icons.map((value) => (
                <option value={value}>{value}</option>
              ))}
            </select>
            <i
              className={"flaticon-" + icon + ""}
              style={{ fontSize: "30px", marginLeft: "20px" }}
            ></i>
          </div>
          <div className="form-group text-right">
            <button type="Submit" className="btn btn-primary">
              <span className="fa fa-save"></span> Save
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => onCancel()}
            >
              <span className="fa fa-reply"></span> Cancel
            </button>
          </div>
        </form>
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

export default AdminFeatureCreate;
