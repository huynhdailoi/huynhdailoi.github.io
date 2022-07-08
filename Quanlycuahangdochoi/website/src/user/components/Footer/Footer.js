import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid border-bottom border-3">
        <div className="container">
          <div className="row justify-content-lg-center pt-1">
            <div className="col-xl col-lg-6 text-start mt-3">
              <i className="far fa-paper-plane d-inline fs-3" />
              <p className="d-inline fw-bold" style={{ fontSize: "15px" }}>
                {" "}
                ĐĂNG KÝ NHẬN BẢN TIN{" "}
              </p>
              <p className="d-inline" style={{ fontSize: "12px" }}>
                VÀ NHẬN PHIẾU GIẢM GIÁ CHO LẦN MUA SẮM ĐẦU TIÊN
              </p>
            </div>
            <div className="col-xl col-lg-6 text-center mt-3">
              <div className="input-group mb-3 " style={{ width: "70%" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email"
                  aria-label="Enter your Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="far fa-envelope-open" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="container">
          <div className="row row-cols-md-2 row-cols-lg-4">
            <div className="col col-12 mb-2 dark my-4 lh-1">
              <h4 className="my-3 fw-bolder text-uppercase">Hỗ Trợ</h4>
              <p className="text-capitalize">- Chính sách bán hàng</p>
              <p className="text-capitalize">- Hướng dẫn đặt hàng</p>
              <p className="text-capitalize">- Phương thức vận chuyển</p>
              <p className="text-capitalize">- Chính sách đổi trả</p>
              <p className="text-capitalize">- Chương trình khuyến mại</p>
              <p className="text-capitalize">- Chính sách dành cho đại lý</p>
              <p className="text-capitalize">- Câu hỏi thường gặp</p>
            </div>
            <div className="col col-12 mb-2 text-dark my-4">
              <div className="pt-5">
                <p className="text-capitalize pt-2">- Chính sách điểm thưởng</p>
                <p className="text-capitalize">- Chính sách bảo hành bảo trì</p>
                <p className="text-capitalize">- Điều khoản thanh toán</p>
                <p className="text-capitalize">- Tuyển dụng</p>
              </div>
            </div>
            <div className="col col-12 mb-2 text-dark my-4">
              <div className="my-2 pt-5">
                <p className="d-inline text-dark">
                  <i className="fab fa-facebook-square me-2 fs-4" />
                </p>
                <p className="d-inline">
                  <a href="true" className="text-decoration-none text-dark">
                    Facebook
                  </a>
                </p>
              </div>
              <div className="my-2">
                <p className="d-inline text-dark">
                  <i className="fab fa-tiktok me-2 fs-4" />
                </p>
                <p className="d-inline">
                  <a href="true" className="text-decoration-none text-dark">
                    Tiktok
                  </a>
                </p>
              </div>
              <div className="my-2">
                <p className="d-inline text-dark">
                  <i className="fab fa-google-plus me-2 fs-4" />
                </p>
                <p className="d-inline">
                  <a href="true" className="text-decoration-none text-dark">
                    Google
                  </a>
                </p>
              </div>
              <div className="my-2">
                <p className="d-inline text-dark">
                  <i className="fab fa-twitter-square me-2 fs-4" />
                </p>
                <p className="d-inline">
                  <a href="true" className="text-decoration-none text-dark">
                    Twitter
                  </a>
                </p>
              </div>
              <div className="my-2">
                <p className="d-inline text-dark">
                  <i className="fab fa-instagram me-2 fs-4" />
                </p>
                <p className="d-inline">
                  <a href="true" className="text-decoration-none text-dark">
                    Instagram
                  </a>
                </p>
              </div>
            </div>
            <div className="col col-12 mb-2 text-dark my-4">
              <h4 className="my-3 fw-bolder text-uppercase">GIỚI THIỆU</h4>
              <p className="text-capitalize">
                ToyStore Công ty Cổ phần Những Trẻ Em Vàng 243 Hai Bà Trưng,
                Phường Võ Thị Sáu, Quận 3, Tp.HCM Giấy phép ĐKKD số 0309818464
                do Sở KHĐT Tp.HCM cấp ngày 02/03/2010
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row justify-content-lg-center border-top pt-1">
          <div className="col-xl">
            <div className="row py-2">
              <div className="col text-white text-start mx-5">
                <p>
                  Copyright © 2021 <cite>TOYSTORY.com</cite>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl py-2">
            <div className="col text-white text-center">
              <p>
                <cite>Khương - Lợi - Duyên - An</cite>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
