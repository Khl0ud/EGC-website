import React from "react";
import "./Departments.css"

import p2 from "./p2.png";
import p5 from "./p5.png";
import p6 from "./p6.png";
import p4 from "./p4.png";

const Departments = () => {
  return (
    <div className="depart_section">
        <div className="container">
            <h1 className="depart_section_title " >Departments</h1>
            <div className="depart_section_list" >
                <Departments_item img={p2} title="IT" />
                <Departments_item img={p5} title="IT" />
                <Departments_item img={p6} title="IT" />
                <Departments_item img={p4} title="IT" />
            </div>
        </div>
    </div>
  )
}

const Departments_item = ({img, title}) => {
    return (
      <div className="depart_item">
        <img className="depart_image" src={img} alt={img} />

        <div className="depart_title">
            <h3>{title}</h3>
        </div>
      </div>
    )
  }


export default Departments