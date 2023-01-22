import React from 'react';
import "./add.css"

function Add() {
  return (
    <div>
      <div>
        <div className="head5"><label>E-Farm</label></div>
        <div className="wrapper">
          <div className="title">
            Post Your Add
          </div>
          <div className="form">
            <h3>Include some details</h3>
            <div className="inputfield">
              <label>For</label>
              <select className="input">
                <option selected>Select</option>
                <option value={1}>Sale</option>
                <option value={2}>Rent</option>
              </select>
            </div>
            <div className="inputfield">
              <label>Name of tool/ equipment</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>Year of manufacture</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>Product description</label>
              <textarea className="textarea" defaultValue={""} />
            </div>
            <div className="inputfield">
              <label>Phone Number</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>Place</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>Address</label>
              <textarea className="textarea" defaultValue={""} />
            </div>
            <div className="inputfield">
              <label>Price</label>
              <input type="text" className="input" />
            </div>
            <div className="inputfield">
              <label>IMAGE</label>
              <input type="file" className="input" />
            </div>
            <div className="inputfield terms">
              <label className="check">
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              <p>Agreed to terms and conditions</p>
            </div>
            <div className="inputfield">
              <input type="submit" defaultValue="Post add" className="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
