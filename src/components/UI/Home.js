import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../css/home.css";
import girl from "../img/girl.webp";
import Products from "../auth/Products";
import WovenImageList from "../auth/ImageList";
import { withTranslation, Trans } from "react-i18next";

export default function Home() {
  return (
    <div className="">
      <div className="first">
        <div>
          <h1>
            <Trans>​MATHMYSTIC XIN CHÀO</Trans>
          </h1>
          <a>
            <Trans>CHẮP CÁNH TƯ DUY, KẾT NỐI TRI THỨC,</Trans> <br></br>
            <Trans>ÁNH SÁNG CHO MỌI TRÁI TIM</Trans>
          </a>
        </div>

        <img src={girl} />
      </div>

      <div className="second">
        <h1>Sản Phẩm Mới Ở Đây</h1>

        <a>Limited time price drop!</a>

        <Products></Products>
      </div>

      <div className="third">
        <h1>Bộ sưu tập</h1>

        <WovenImageList></WovenImageList>

        {/* <Products></Products> */}
      </div>

      <div className="fourth">
        <div>
          <h1>GIỚI THIỆU</h1>
          <a>
            ​Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo
            <br></br>
            cho tất cả các bạn học sinh và giáo viên. Hơn cả một
            <br></br>
            sản phẩm, đây còn là một cách thức mới, sáng tạo và
            <br></br>
            thú vị để tìm hiểu và trải nghiệm hình
            <br></br>
            học
            <br></br>
            <br></br>
          </a>
          <a href="/intro">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Xem thêm
            </span>
          </button>
          </a>
          
        </div>

        <img src="https://static.wixstatic.com/media/ce0c23_96772a588b3140d8b006814b93eca971~mv2.jpg/v1/crop/x_0,y_67,w_2469,h_2254/fill/w_230,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4735305482043_205294a9275e04c6e2e345dbd0c9c549.jpg"></img>
      </div>

      <div className="fifth">
        <img src="https://static.wixstatic.com/media/ce0c23_6df0ff7a005648ab99eca26b5be2b638~mv2.jpg/v1/fill/w_223,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/z4946570046331_4b2d5d81022136ff9f2850f752634509.jpg"></img>

        <div>
          <h1>MÔ HÌNH TOÁN HỌC</h1>
          <a>
            Điểm khác biệt của dự án là việc kết hợp bộ dụng cụ
            <br></br>
            mô hình và trang web hướng dẫn học tập để tạo ra một
            <br></br> trải nghiệm học tập toàn diện.
            <br></br>
            <br></br>
          </a>
          
          <a href="/about">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Xem thêm
            </span>
          </button>
          </a>
        </div>
      </div>

      <div className="sixth">
        <div>
          <h1>​TÀI LIỆU HỌC TẬP</h1>
          <a>
            Các bài giảng được nhóm dự án thiết kế đơn giản
            <br></br>
            nhưng đầy đủ các tài nguyên phục vụ cho việc
            <br></br>
            học tập hình học, từ đó khuyến khích làm việc nhóm
            <br></br> song song với hình thành thói quen tự học
            <br></br>
            <br></br>
          </a>
          <a href="/doc">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Xem thêm
            </span>
          </button>
          </a>
        </div>

        <img src="https://static.wixstatic.com/media/ce0c23_c72a5e5c56cd421b84e2ecb1b9c58e18~mv2.jpg/v1/fill/w_290,h_167,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/content_F9-l%C3%A0-m%C3%B4n-g%C3%AC-T%E1%BA%A1i-sao-b%E1%BA%A1n-c%E1%BA%A7n-ph%E1%BA%A3.jpg"></img>
      </div>
    </div>
  );
}
