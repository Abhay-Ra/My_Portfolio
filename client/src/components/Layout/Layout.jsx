import React from "react";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Techstack from "../../pages/Techstack/Techstack";
import Projects from "../../pages/Projects/Projects";
import Education from "../../pages/Education/Education";
import WorkExp from "../../pages/WorkExp/WorkExp";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-2 col-sm-2 col-3"
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            backgroundColor: "#1e1e2c",
          }}
        >
          <Menu />
        </div>
        <div
          className="col-sm-10 col-md-10 col-9 p-0"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="">
            <Home />
          </div>
          <div className="">
            <About />
          </div>
          <div className="">
            <Education />
          </div>
          <div className="">
            <Techstack />
          </div>
          <div className="">
            <Projects />
          </div>
          <div className="">
            <WorkExp />
          </div>
          <div className="bg-danger" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-secondary" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-success" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-danger" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-secondary" style={{ height: "12rem" }}>
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
