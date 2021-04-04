import React from "react";
import { formalEducation, courses } from "./data.js";

export default function Education() {
  return (
    <div className="p-4">
      <h3 className="text-center mb-4">Formal Education</h3>
      {formalEducation.map((e) => (
        <div
          className="d-flex flex-row flex-wrap align-items-center justify-content-between shadow mb-3"
          style={{ backgroundColor: "white", minHeight: "50px", width: "95vw" }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "black",
              cursor: e.url ? "pointer" : "default",
            }}
            href={`${e.url ? e.url : ""}`}
            target={e.url ? "_blank" : ""}
          >
            <h5 className="mt-1 pl-4" style={{ width: "45vw" }}>
              {e.title}
            </h5>
          </a>
          <h6 className="text-center" style={{ width: "10vw" }}>
            {e.periodo}
          </h6>
          <h6 className="text-right pr-4" style={{ width: "35vw" }}>
            {e.institution}
          </h6>
          <div></div>
        </div>
      ))}
      <h3 className="text-center mb-4">Courses</h3>
      {courses.map((e) => (
        <div
          className="d-flex flex-row flex-wrap align-items-center justify-content-between shadow mb-3"
          style={{ backgroundColor: "white", minHeight: "50px", width: "95vw" }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "black",
              cursor: e.url ? "pointer" : "default",
            }}
            href={`${e.url ? e.url : ""}`}
            target={e.url ? "_blank" : ""}
          >
            <h5 className="mt-1 pl-4" style={{ width: "45vw" }}>
              {e.title}
            </h5>
          </a>
          <h6 className="text-center" style={{ width: "10vw" }}>
            {e.hours} hs.
          </h6>
          <h6 className="text-right pr-4" style={{ width: "35vw" }}>
            {e.institution}
          </h6>
          <div></div>
        </div>
      ))}
    </div>
  );
}
