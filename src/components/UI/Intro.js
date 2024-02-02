import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../css/intro.css";
import girl from "../img/girl.webp";
import Products from "../auth/Products";
export default function Home() {
  return (
    <div className="container">
      <div className="first2">
        <div>
          <h1>​TÍNH NĂNG CỦA WEBSITE</h1>
          <a>
            + Hướng dẫn từ A đến Z: Trang web của chúng tôi cung cấp
            <br></br>
            hướng dẫn từng bước để tạo ra các mô hình hình học 
            <br></br>
            không gian từ cơ bản đến phức tạp. 
            <br></br>
            + Bài giảng tương tác:  Bạn sẽ thực hành di chuyển, xoay, 
            <br></br>
            và tạo các hình học không gian theo hướng dẫn. Điều này giúp
            <br></br>
            bạn hiểu sâu hơn và tự tin hơn khi làm việc với các mô 
            <br></br>hình. 
            <br></br>
            Bộ tài
            liệu và ví dụ: Ngoài hướng dẫn, trang web còn cung cấp 
            <br></br>bộ tài liệu phong phú và ví dụ minh họa. Bạn 
            <br></br> có thể tham khảo chúng để tăng cường kiến thức 
            <br></br>của mình và sáng tạo ra những mô hình 
            độc đáo.
          </a>
        </div>

        <img src="https://static.wixstatic.com/media/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg/v1/fill/w_633,h_518,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_a6e1bb8d93704b859a65ba5d3dd3645a~mv2.jpg" />
      </div>

      <div className="second">
        <h1>Sản Phẩm Mới Ở Đây</h1>

        <a>Limited time price drop!</a>

        <Products></Products>
      </div>

      <div className="third">
        <h1>Bộ sưu tập</h1>
        {/* <Products></Products> */}
      </div>

      <div className="fourth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>

      <div className="fifth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>
      <div className="sixth">
        <h1>
          ​GIỚI THIỆU Chúng tôi sẽ giới thiệu một sản phẩm toán học độc đáo cho
          tất cả các bạn học sinh và giáo viên. Hơn cả một sản phẩm, đây còn là
          một cách thức mới, sáng tạo và thú vị để tìm hiểu và trải nghiệm hình
          học
        </h1>
      </div>
    </div>
  );
}
