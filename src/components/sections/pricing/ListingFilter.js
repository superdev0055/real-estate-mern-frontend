import React, { useState, useReducer } from "react";
import Data from "../../../data/select";
import PriceReducer from "../../../reducers/PriceReducer";
import InputGroup from 'react-bootstrap/InputGroup';
var PriceFilter = {};

const ListingFilter = ({ getData }) => {
  const [advanceSearch, setAdvanceSearch] = useState(true);

  const {
    locationlist,
    statuslist,
    pricerangelist,
    bedslist,
    bathroomslist,
    typelist,
    diameterlist,
  } = Data;

  const [PriceState, dispatch] = useReducer(PriceReducer, PriceFilter);

  const filterData = () => {
    PriceFilter = {
      location: PriceState.location,
      type: PriceState.type,
      bed: PriceState.bed === undefined ? 0 : PriceState.bed,
      bathroom: PriceState.bathroom === undefined ? 0 : PriceState.bathroom,
      price: PriceState.price === undefined ? "0" : PriceState.price,
      diameter: PriceState.diameter,
      status: PriceState.status === "Any Status" ? "" : PriceState.status,
    };
    console.log(PriceFilter);
    getData(PriceFilter);
  };

  return (
    <div className="mt-8 mb-16">
      <div className="flex justify-center">
        <div className="w-11/12 min-md:w-8/12 md:9-12" >
          <div className="border border-gray rounded-lg px-4 pt-4">
            <div className="row">
              <InputGroup>
              
                <input placeholder="Search by location, station, condo name or keyword" className="col-md-6 form-control"/>

                <select
                  className="col-md-2 form-control"
                  name="Status"
                  style={{ fontWeight: "bold"}}
                  value={PriceState.status}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE",
                      value: e.target.value,
                      key: "status",
                    })
                  }
                >
                  <option value="" hidden>
                    Buy
                  </option>
                  {statuslist.map((res) => {
                    return (
                      <option className="form-control" value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>
                        
                <select
                  className="col-md-2 form-control"
                  name="Status"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                  value={PriceState.status}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE",
                      value: e.target.value,
                      key: "status",
                    })
                  }
                >
                  <option value="" hidden>
                    Property Type
                  </option>
                  {statuslist.map((res) => {
                    return (
                      <option className="form-control" value={res}>
                        <span>{res}</span>
                        
                      </option>
                    );
                  })}

                </select>       
                <button
                    onClick={() => filterData()}
                    className="btn-block form-control col-md-2"
                    style={{borderRadius:0,backgroundColor:"#fc3206",border:"none",color:"white",fontSize:"19px"}}
                  >
                    Search
                </button>                
              </InputGroup>   
            </div>
            <div className="row" style={{alignItems:"center"}}>
              <div className="col-md-2 grid-custom">
                <select
                  className="form-control"
                  name="Price Range"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                  size="sm"
                  value={PriceState.price}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE",
                      value: e.target.value,
                      key: "price",
                    })
                  }
                >
                  <option value="" hidden>
                    Min Price
                  </option>
                  {pricerangelist.map((res) => {
                    return (
                      <option className="form-control" value={res.value}>
                        {res.res}
                      </option>
                    );
                  })}
                </select>                
              </div>
              <div className="col-md-2 grid-custom">
                <select
                  className="form-control"
                  name="Price Range"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                  size="sm"
                  value={PriceState.price}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE",
                      value: e.target.value,
                      key: "price",
                    })
                  }
                >
                  <option value="" hidden>
                    Max Price
                  </option>
                  {pricerangelist.map((res) => {
                    return (
                      <option className="form-control" value={res.value}>
                        {res.res}
                      </option>
                    );
                  })}
                </select>
                                
              </div>  
              <div className="col-md-2 grid-custom">
                <select
                  className="form-control"
                  name="Price Range"
                  style={{ fontWeight: "bold", marginBottom: "15px" }}
                  size="sm"
                  value={PriceState.price}
                  onChange={(e) =>
                    dispatch({
                      type: "UPDATE",
                      value: e.target.value,
                      key: "price",
                    })
                  }
                >
                  <option value="" hidden>
                    Beds
                  </option>
                  {bedslist.map((res) => {
                    return (
                      <option className="form-control" value={res}>
                        {res}
                      </option>
                    );
                  })}
                </select>                
              </div>     
              <div className="col-md-3"><input type="checkbox"></input><span className="banner-search-checkbox">Near transport station</span></div>                           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingFilter;
