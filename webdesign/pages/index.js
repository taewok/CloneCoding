import React from "react";

const index = () => {
  return (
    <div>
      <div className="divbox">dfsdfs</div>
      <style jsx>{`
        .divbox {
          width: 100px;
          height: 60px;
          background-color: red;
          position: relative;
        }
        .divbox::after {
          content: "";
          position: absolute;
          right: -30px;
          top: 50%;
          margin-top: -20px;
          border-top: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 20px solid transparent;
          border-left: 20px solid red;
        }
      `}</style>
    </div>
  );
};

export default index;
