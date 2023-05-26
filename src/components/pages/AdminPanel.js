import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";

const AdminPanel = (props) => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  return (
    <div>
      <MetaTags>
        <title>Acres - Real Estate React Template | Admin</title>
        <meta name="description" content="#" />
      </MetaTags>
      <AdminHeader />
      <AdminSider url={props.url} />
      <div style={{ display: "flex", justifyContent: "center", padding: "3%" }}>
        <h2>Welcome to Admin Page.</h2>
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

export default AdminPanel;
