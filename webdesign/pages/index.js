import React, { useEffect } from "react";
import SECTION from "./component/section";

const index = () => {
  return (
    <div className="main_box">
      <header>
        <div className="head_wrap">
          <ul>
            <li>LOGIN</li>
            <li>JOIN</li>
            <li>+BOOKMARK</li>
          </ul>
          <span className="main_title">MINIPET</span>
          <form className="search_form">
            <input placeholder="검색어를 입력하세요."></input>
            <img src="https://minipetmall.co.kr/pc/images/icon/search.png"></img>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <span>ABOUT MINIPET</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/11.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/11_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">대표인사말</p>
                      <p className="txt">
                        미니펫 대표의 신념, 고객을 위한 약속
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/12.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/12_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">회사소개</p>
                      <p className="txt">
                        반려동물 분양 만족도 1위 미니펫을 소개합니다.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/13.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/13_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">스텝소개</p>
                      <p className="txt">
                        미니펫과 함께 하는 스텝을 소개합니다.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/14.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/14_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">채용정보</p>
                      <p className="txt">
                        함께 일해 볼래요? 브리더, 스텝 大모집{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/15.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/15_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">가맹문의</p>
                      <p className="txt">
                        눈 앞의 이익만을 쫓는 프랜차이즈 영업은 하지 않습니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>분양시스템</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/21.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/21_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">사후관리</p>
                      <p className="txt">미니펫만의 특별한 평생 서비스</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/22.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/22_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">분양시스템</p>
                      <p className="txt">20년 전통의 체계적인 시스템</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/23.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/23_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">안심배송</p>
                      <p className="txt">안전최우선, 전국 어디든 달려갑니다</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/24.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/24_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">제휴업체</p>
                      <p className="txt">미니펫 가족을 위한 차별화된 혜택</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>ALL PET</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/31.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/31_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">전체보기</p>
                      <p className="txt">
                        미니펫에서 현재 분양중인 아가들입니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/32.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/32_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">프리미엄</p>
                      <p className="txt">
                        최상위 등급의 1% 아가들을 만나보세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/33.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/33_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">견종/묘종별 모아보기</p>
                      <p className="txt">
                        다양한 견종/묘종별로 아가들을 보실 수 있어요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/34.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/34_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">지점별 모아보기</p>
                      <p className="txt">나와 가까운 미니펫은 어디일까요?</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>MINIPET</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/31.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/31_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">전체보기</p>
                      <p className="txt">
                        미니펫에서 현재 분양중인 아가들입니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/32.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/32_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">프리미엄</p>
                      <p className="txt">
                        최상위 등급의 1% 아가들을 만나보세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/33.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/33_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">견종별 모아보기</p>
                      <p className="txt">
                        다양한 견종별로 아가들을 보실 수 있어요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/34.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/34_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">지점별 모아보기</p>
                      <p className="txt">나와 가까운 미니펫은 어디일까요?</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>MINICAT</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/41.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/41_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">전체보기</p>
                      <p className="txt">
                        미니펫에서 현재 분양중인 아가들입니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/42.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/42_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">프리미엄</p>
                      <p className="txt">
                        최상위 등급의 1% 아가들을 만나보세요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/43.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/43_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">묘종별 모아보기</p>
                      <p className="txt">
                        다양한 묘종별로 아가들을 보실 수 있어요.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/44.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/44_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">지점별 모아보기</p>
                      <p className="txt">나와 가까운 미니펫은 어디일까요?</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>입양후기</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/51.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/51_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">셀럽X미니펫</p>
                      <p className="txt">
                        미니펫과 인연을 맺은 셀럽을 소개합니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/52.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/52_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">미분고소</p>
                      <p className="txt">
                        미니펫에서 반려가족을 입양하신 고객님을 소개합니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/53.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/53_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">실제 분양후기</p>
                      <p className="txt">미니펫 가족분들의 솔직분양후기</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>반려 지식백과</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/61.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/61_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">반려 지식백과</p>
                      <p className="txt">
                      반려동물 지식 A to Z
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/62.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/62_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">미니펫TV</p>
                      <p className="txt">
                      반려동물 정보, 미니펫 일상 등 영상으로 만나는 이야기
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/63.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/63_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">미니펫이벤트</p>
                      <p className="txt">주고 주고 또! 주는 미니펫의 이벤트</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/64.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/64_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">사회공헌</p>
                      <p className="txt">미니펫의 사회활동 및 공헌을 소개합니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li><span>WEDDING</span></li>
            <li><span>OVERSEAS ADOPTION</span></li>
            <li><span>Q&amp;A</span></li>
            <li>
            <span>지점안내</span>
              <div className="hide_box">
                <ul>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/101.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/101_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">강남직영점</p>
                      <p className="txt">
                      미니펫 강남직영점을 소개합니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/102.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/102_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">성수본점</p>
                      <p className="txt">
                      미니펫 성수본점을 소개합니다.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/103.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/103_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">부천직영점</p>
                      <p className="txt">미니펫 부천직영점을 소개합니다.</p>
                    </div>
                  </li>
                  <li>
                    <div className="img_box">
                      <img src="https://minipetmall.co.kr/pc/images/gnb/104.jpg" />
                      <img src="https://minipetmall.co.kr/pc/images/gnb/104_on.jpg" />
                    </div>
                    <div className="txt_box">
                      <p className="tit">수원직영점</p>
                      <p className="txt">미니펫 수원직영점을 소개합니다.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <SECTION></SECTION>
      <style jsx>{`
        * {
          font-family: "Noto Sans KR", sans-serif;
          list-style: none;
        }

        header {
          height: 145px;
          margin: 0 auto;
        }

        .head_wrap {
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .head_wrap > ul {
          width: 200px;
          display: flex;
          padding: 0;
          font-size: 16px;
        }
        .head_wrap > ul > li {
          margin-left: 20px;
        }
        .head_wrap > ul > li:nth-child(1) {
          margin-left: 0px;
        }
        .head_wrap > ul > li:nth-child(3) {
          color: #c29683;
          font-weight: bolder;
        }

        .search_form {
          position: relative;
        }
        .search_form > input {
          height: 30px;
          width: 200px;
          padding: 0px 30px 0px 10px;
          border-bottom: 2px solid black;
          border-top: none;
          border-left: none;
          border-right: none;
          position: relative;
        }
        .search_form > input:focus {
          outline: none;
        }
        .search_form > img {
          width: 18px;
          height: 18px;
          top: 8px;
          position: absolute;
          right: 5px;
        }

        .main_title {
          font-size: 40px;
        }

        nav {
          width: 100%;
          height: 53px;
          font-size: 16px;
          color: #333333;
          border-top: 1px solid rgb(205, 205, 205);
          border-bottom: 1px solid rgb(205, 205, 205);
          box-sizing: border-box;
          position: relative;
        }
        nav > ul {
          width: 1400px;
          display: flex;
          margin: 0 auto;
          justify-content: center;
        }
        nav > ul > li {
          height: 53px;
          padding: 0px 23px;
        }
        nav > ul > li > span {
          line-height: 53px;
          cursor: pointer;
          display: inline-block;
          position: relative;
        }
        nav > ul > li > span::after {
          content: "";
          position: absolute;
          width: 0px;
          height: 3px;
          margin: 0 auto;
          background: #c29683;
          left: 0;
          right: 0;
          bottom: 0;
          transition: 400ms width;
        }
        nav > ul > li:hover > span::after {
          width: 100%;
        }
        nav > ul > li:hover > .hide_box {
          display: block;
        }

        .hide_box {
          width: 100%;
          position: absolute;
          top: 53px;
          border-top: 1px solid rgb(205, 205, 205);
          border-bottom: 1px solid rgb(205, 205, 205);
          display: none;
          left: 0px;
          background:white;
        }
        .hide_box:hover {
          display: block;
        }
        .hide_box > ul {
          width: 1230px;
          display: flex;
          margin: 0 auto;
          padding: 30px 0px;
          height: 186px;
          justify-content: center;
        }
        .hide_box > ul > li {
          width: 25%;
          padding: 0px 15px;
          cursor: pointer;
        }
        .hide_box > ul > li:hover > .txt_box > .txt {
          color: rgb(104, 104, 104);
        }
        .hide_box > ul > li:hover > .img_box > img:nth-child(1) {
          opacity: 0;
        }

        .txt_box {
          text-align: center;
          height: 40px;
        }
        .tit {
          font-size: 18px;
          color: #111;
          font-weight: 500;
        }
        .txt {
          color: #999;
        }

        .img_box {
          position: relative;
          width: 100%;
        }
        .img_box > img {
          width: 100%;
        }
        .img_box > img:nth-child(1) {
          position: absolute;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default index;
