import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import $ from "jquery";

import "./AdminSider.css";

const AdminSider = (props) => {
  useEffect(() => {
    $(".menu-item:first").css("color", "#d1d1d1");
    $(".menu-item.active").removeClass("active");
    $(".menu-item[href='" + props.url + "']").addClass("active");
  }, []);

  return (
    <Menu>
      <a className="menu-item" href="/admin">
        Home
      </a>
      <a className="menu-item" href="/admin/users">
        User
      </a>
      <a className="menu-item" href="/admin/categories">
        Category
      </a>
      <a className="menu-item" href="/admin/properties">
        Property
      </a>
      <a className="menu-item" href="/admin/currencies">
        Currency
      </a>
      <a className="menu-item" href="/admin/features">
        Feature
      </a>
    </Menu>
  );
};

export default AdminSider;
