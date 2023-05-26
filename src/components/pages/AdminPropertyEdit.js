import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MetaTags from "react-meta-tags";
import axios from "axios";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";
import icons from "./../../data/icons";
import images from "./../../data/images";

const AdminUserEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [icon, setIcon] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://real-estate-backend-9ph8.onrender.com/admin/category/${params.id}`
      )
      .then((res) => {
        setName(res.data.result.name);
        setDescription(res.data.result.description);
        setIcon(res.data.result.icon);
        setImg(res.data.result.img);
      });
  }, []);

  const onCancel = () => {
    navigate("/admin/categories");
  };
  const postData = () => {
    if (name == "") {
      return false;
    }
    const formData = {
      name: name,
      description: description,
      icon: icon,
      img: img,
    };
    axios
      .put(
        `https://real-estate-backend-9ph8.onrender.com/admin/category/${params.id}/update`,
        formData
      )
      .then((res) => {
        navigate("/admin/categories");
      })
      .catch((err) => {
        setError(true);
        setErrorMsg(err);
      });
  };

  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Admin User Edit</title>
        <meta name="description" content="#" />
      </MetaTags>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div className="text-center" style={{ margin: "20px" }}>
        <h2>Property Category Create</h2>
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
              placeholder="Username"
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control form-control-light"
              placeholder="Description"
              name="description"
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
          <div className="form-group row">
            <label className="col-md-1 col-lg-1" style={{ marginTop: "10px" }}>
              Image :
            </label>
            <select
              value={img}
              onChange={(e) => setImg(e.target.value)}
              type="image"
              className="form-control col-md-8 col-lg-8"
            >
              <option value="">Select Image</option>
              {images.map((value) => (
                <option value={value}>
                  {value.slice(value.lastIndexOf("/") + 1)}
                </option>
              ))}
            </select>
            <img
              src={process.env.PUBLIC_URL + "/" + img}
              alt="category"
              style={{ marginLeft: "20px", width: "100px" }}
            />
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

export default AdminUserEdit;
