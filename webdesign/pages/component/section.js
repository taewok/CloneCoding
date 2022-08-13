import React, { useEffect, useState } from "react";

const section = () => {
  let slide;
  if (typeof document !== "undefined") {
    slide = document.querySelectorAll(".slide");
  }
  const [nowNum, setNowNum] = useState(4);
  const slideLoop = () => {
    const nextNum = nowNum - 1;
    setNowNum(nextNum);
    if (nowNum == 0) {
      for (let index = 0; index < slide.length; index++) {
        slide[index].style.opacity = 1;
      }
      setNowNum(slide.length - 1);
    } else {
      console.log(nowNum);
      slide[nowNum].style.opacity = 0;
    }
  };
  return (
    <section>
      <ul>
        <li className="slide">
          <img src="https://minipetmall.co.kr/upload/banner/352022570303669.jpg" />
        </li>
        <li className="slide">
          <img src="https://minipetmall.co.kr/upload/banner/062021410801579.jpg" />
        </li>
        <li className="slide">
          <img src="https://minipetmall.co.kr/upload/banner/092021360801199.jpg" />
        </li>
        <li className="slide">
          <img src="https://minipetmall.co.kr/upload/banner/162021111011058.jpg" />
        </li>
        <li className="slide">
          <img src="https://minipetmall.co.kr/upload/banner/132022560721980.jpg" />
        </li>
      </ul>
      <div onClick={() => slideLoop()}>button</div>
      <style jsx>{`
        section {
          width: 100%;
          overflow: hidden;
        }
        section > ul {
          height: 660px;
          width: 100%;
          position: relative;
        }
        section > ul > li {
          width: 100%;
          transition: opacity 800ms;
          position: absolute;
          left: 0;
        }
        section > ul > li > img {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default section;
