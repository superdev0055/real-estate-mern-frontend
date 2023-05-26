import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MetaTags from "react-meta-tags";
import AdminHeader from "./../layouts/AdminHeader";
import AdminSider from "./../layouts/AdminSider";

const AdminPanel = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      navigate("/admin");
    };
  });

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
    </div>
  );
};

export default AdminPanel;
