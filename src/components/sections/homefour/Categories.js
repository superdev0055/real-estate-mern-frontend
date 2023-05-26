// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import category from "../../../data/category";

// class Categories extends Component {
//   render() {
//     const { type } = category;

//     return (
//       <div className="section section-padding">
//         <div className="container">
//           <div className="section-title-wrap section-header">
//             <h5 className="custom-primary">Categories</h5>
//             <h2 className="title">Browse By Category</h2>
//           </div>
//           <div className="row">
//             {type.slice(0, 8).map((item, i) => (
//               <div key={i} className="col-lg-4 col-md-6">
//                 <div className="acr-category">
//                   <div className="acr-category-thumb">
//                     <i className={"flaticon-" + item.icon + ""} />
//                     <Link to="#">
//                       <img
//                         src={process.env.PUBLIC_URL + "/" + item.img}
//                         alt="category"
//                       />
//                     </Link>
//                     <div className="acr-category-body">
//                       <h5>
//                         {" "}
//                         <Link to="#">{item.title}</Link>{" "}
//                       </h5>
//                       <span>{item.numberofitem} Listings</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Categories;

/////////////////////////////////////// Functional Components /////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import category from "../../../data/category";

const Categories = () => {
  // const { type } = category;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-estate-backend-9ph8.onrender.com/admin/get-categories")
      .then((res) => {
        setData(res.data.result);
      });
  }, []);

  return (
    <div className="section section-padding">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">Categories</h5>
          <h2 className="title">Browse By Category</h2>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="acr-category">
                <div className="acr-category-thumb">
                  <i className={"flaticon-" + item.icon + ""} />
                  <Link to={`/property/${item.name}`}>
                    <img
                      src={process.env.PUBLIC_URL + "/" + item.img}
                      alt="category"
                    />
                  </Link>
                  <div className="acr-category-body">
                    <h5>
                      {" "}
                      <Link to={`/property/${item.name}`}>
                        {item.name}
                      </Link>{" "}
                    </h5>
                    <span>{item.numberofitem} Listings</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
