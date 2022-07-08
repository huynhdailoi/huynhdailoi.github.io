import React from "react";
import { Image } from "react-bootstrap";
import "../../cssWeb/TrangChuCss.css";
import "../../cssWeb/card.css";
import { Link } from "react-router-dom";

const Trangchu = () => {
  return (
    <div>
      <div>
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(245,246,247)" }}
        >
          <div
            className="container px-1 pt-3"
            style={{ paddingBottom: "30px" }}
          >
            <div className="row">
              {/* Bắt Đầu tavbar */}
              <div
                className="col-lg-3 rounded-4"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              >
                {/* Bắt Đầu tavbar */}
                <div className="row justify-content-center">
                  <p className="fw-bold fs-4 text-center border pt-2 pb-2 rounded-4 bg-dark text-white">
                    <em>
                      <i className="fas fa-align-left text-white" />
                      Danh Mục Sản Phẩm
                    </em>
                  </p>
                  <div className="Tabs">
                    <ul className="ulTabs">
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-car" />
                          </span>{" "}
                          Đồ chơi Xe Mô Hình
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-memory" />
                          </span>{" "}
                          Đồ chơi Công Nghệ
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-ship" />
                          </span>{" "}
                          Đồ chơi Tàu Thuyền
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-plane" />
                          </span>{" "}
                          Máy Bay - Tàu Lửa
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-robot" />
                          </span>{" "}
                          Siêu Nhân - Robot
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-dog" />
                          </span>{" "}
                          Động Vật
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-user-md" />
                          </span>{" "}
                          Đồ Chơi Bác Sĩ
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-utensils" />
                          </span>{" "}
                          Đồ Chơi Nấu Ăn
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="far fa-plus-square" />
                          </span>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                {/* Kết Thúc tavbar */}
              </div>
              {/* Kết Thúc tavbar */}
              {/* Bắt Đầu Column Sản Phẩm */}
              <div className="col-lg-9">
                {/* Bắt Đầu Column Sản Phẩm */}
                <div className="row">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="false"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                      />
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                      />
                    </div>
                    <div className="carousel-inner  d-none d-sm-block">
                      <div className="carousel-item active">
                        <img
                          alt=""
                          src={require("../../img/image1.png")}
                          className="d-block w-100"
                          style={{ height: "350px" }}
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                      <div className="carousel-item">
                        <img
                          alt=""
                          src={require("../../img/image1.png")}
                          className="d-block w-100"
                          style={{ height: "350px" }}
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                      <div className="carousel-item">
                        <img
                          alt=""
                          src={require("../../img/image1.png")}
                          className="d-block w-100"
                          style={{ height: "350px" }}
                        />
                        <div className="carousel-caption d-none d-md-block"></div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-xl">
                    <img alt="" src=".../../img/image.png" width="100%" />
                  </div>
                  <div className="col-xl">
                    <img alt="" src=".../../img/image.png" width="100%" />
                  </div>
                </div>
                {/* kết Thứ Column Sản Phẩm */}
              </div>
              {/* kết Thứ Column Sản Phẩm */}
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div id="nz-div">
                  <h3 className="tde">
                    <span className="null fw-bold">
                      <i className="fas fa-fire me-2 fs-4" />
                      Sản Phẩm Hót
                    </span>
                  </h3>
                  <div className="sub-cat">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item me-3">
                          <a
                            href
                            className="text-decoration-none text-dark fw-normal"
                          >
                            <p className="d-inline me-1">Xem Tất Cả</p>
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              {/* Sản Phẩm 1 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <Link to="/website">
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                        style={{ width: "100%" }}
                      />
                    </Link>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BWM - GTS{" "}
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">500.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 1 */}
              {/* Sản Phẩm 2 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <Image
                        src={require("../../img/DoChoiXeMoHinh/BWM-5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW 5 Series 2019
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 2 */}
              {/* Sản Phẩm 3 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/búp bê/1-bup-be-barbie-w2862-cong-chua-sinh-nhat.jpg")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Công chúa
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 3 */}
              {/* Sản Phẩm 4 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/búp bê/76baefb801ef1e2e71d7ae29d39f9ebb.jpg")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Búp bê
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.500.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 4 */}
              {/* Sản Phẩm 5 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/búp bê/bup-be-barbie-thoi-trang-tham-do0-11012016165016.jpg")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Barbie
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.000.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 5 */}
              {/* Sản Phẩm 1 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/búp bê/bup-be-chan-dai-nho-bibos-linhanhkids1.jpg")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Bibos{" "}
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">500.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 1 */}
              {/* Sản Phẩm 2 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BWM-5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW 5 Series 2019
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 2 */}
              {/* Sản Phẩm 3 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-M5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW M5 F90
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 3 */}
              {/* Sản Phẩm 4 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/KIDBO-K100.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      KIDBO K100
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.500.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 4 */}
              {/* Sản Phẩm 5 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/Kaizhi-Y6.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Kaizhi Y6
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.000.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 5 */}
            </div>
            <a href>
              <img alt="" src=".../../img/quangcao.jpg" width="100%" />
            </a>
            <div className="row pt-4">
              <div className="col-12">
                <div
                  id="nz-div"
                  style={{ borderTop: "2px solid #F59B31 !important" }}
                >
                  <h3
                    className="tde"
                    style={{ backgroundColor: "rgb(245,155,49)" }}
                  >
                    <span className="null fw-bold">
                      <i className="far fa-heart me-2 fs-4" />
                      Sản Phẩm Ưa Chuộng
                    </span>
                  </h3>
                  <div className="sub-cat">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item me-3">
                          <a
                            href
                            className="text-decoration-none text-dark fw-normal"
                          >
                            <p className="d-inline me-1">Xem Tất Cả</p>
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              {/* Sản Phẩm 1 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BWM - GTS{" "}
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">500.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 1 */}
              {/* Sản Phẩm 2 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BWM-5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW 5 Series 2019
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 2 */}
              {/* Sản Phẩm 3 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-M5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW M5 F90
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 3 */}
              {/* Sản Phẩm 4 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/KIDBO-K100.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      KIDBO K100
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.500.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 4 */}
              {/* Sản Phẩm 5 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/Kaizhi-Y6.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Kaizhi Y6
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.000.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 5 */}
              {/* Sản Phẩm 1 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BWM - GTS{" "}
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">500.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 1 */}
              {/* Sản Phẩm 2 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BWM-5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW 5 Series 2019
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true"></del>
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 2 */}
              {/* Sản Phẩm 3 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/DoChoiXeMoHinh/BMW-M5.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      BMW M5 F90
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">450.000đ</span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 3 */}
              {/* Sản Phẩm 4 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/KIDBO-K100.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      KIDBO K100
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.500.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 4 */}
              {/* Sản Phẩm 5 */}
              <div className="col">
                <div className="prod_hold sale  prod_visible">
                  <div className="image thumbNail">
                    <a href>
                      <img
                        alt=""
                        src={require("../../img/dochoicongnghe/Kaizhi-Y6.png")}
                        style={{ width: "100%" }}
                      />
                    </a>
                  </div>
                  <div className="babystreet-list-prod-summary">
                    <a href className="text-decoration-none text-dark fs-6">
                      Kaizhi Y6
                    </a>
                    <div className="price_hold">
                      <del aria-hidden="true" />
                      <span className="fs-5 text-danger fw-bold">
                        1.000.000đ
                      </span>
                    </div>{" "}
                    {/* Small countdown */}
                  </div>
                  <div className="links">
                    <div className="pt-1 pb-1 mt-1">
                      <a
                        href
                        className="text-decoration-none text-white text-uppercase fw-bolder"
                      >
                        Xem Chi Tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sản Phẩm 5 */}
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  id="nz-div"
                  style={{ borderTop: "2px solid rgb(68,157,240)" }}
                >
                  <h3
                    className="tde"
                    style={{ backgroundColor: "rgb(68,157,240)" }}
                  >
                    <span className="null fw-bold">
                      <i className="fas fa-star me-2 fs-4" />
                      Sản Phẩm Bán Chạy
                    </span>
                  </h3>
                  <div className="sub-cat">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item me-3">
                          <a
                            href
                            className="text-decoration-none text-dark fw-normal"
                          >
                            <p className="d-inline me-1">Xem Tất Cả</p>
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 d-none d-sm-block">
                <img
                  alt=""
                  src={require("../../img/quangcao2.png")}
                  style={{ width: "100%" }}
                  height={550}
                />
              </div>
              <div className="col-xl col-lg-9">
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/VECTO-YD-218.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          VECTO-YD-218
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            3.000.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/TL-Thomas.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Tàu Lửa Thomas
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            200.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 2 */}
                  {/* Sản Phẩm 3 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoibacsi/bo-do-choi-bac-si-9902-cho-be-yeu-1.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Bác Sĩ 9902
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            149.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 3 */}
                  {/* Sản Phẩm 4 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoidongvat/do-choi-mo-hinh-dong-vat-rung-ht7503-1.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Động Vật Rừng
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            152.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 4 */}
                </div>
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/VECTO-YD-218.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          VECTO-YD-218
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            3.000.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/TL-Thomas.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Tàu Lửa Thomas
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            200.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 2 */}
                  {/* Sản Phẩm 3 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoibacsi/bo-do-choi-bac-si-9902-cho-be-yeu-1.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Bác Sĩ 9902
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            149.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 3 */}
                  {/* Sản Phẩm 4 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoidongvat/do-choi-mo-hinh-dong-vat-rung-ht7503-1.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Động Vật Rừng
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            152.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 4 */}
                </div>
              </div>
              <div className="col-12 pt-3">
                <div
                  id="nz-div"
                  style={{ borderTop: "2px solid rgb(233,89,126)" }}
                >
                  <h3
                    className="tde"
                    style={{ backgroundColor: "rgb(233,89,126)" }}
                  >
                    <span className="null fw-bold">
                      <i className="fas fa-bullhorn me-2 fs-4" />
                      Sản Phẩm Khuyến mại
                    </span>
                  </h3>
                  <div className="sub-cat">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item me-3">
                          <a
                            href
                            className="text-decoration-none text-dark fw-normal"
                          >
                            <p className="d-inline me-1">Xem Tất Cả</p>
                            <i className="fas fa-angle-double-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-xl col-lg-9">
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/VECTO-YD-218.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          VECTO-YD-218
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            3.000.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/TL-Thomas.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Tàu Lửa Thomas
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            200.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 2 */}
                  {/* Sản Phẩm 3 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoibacsi/bo-do-choi-bac-si-9902-cho-be-yeu-1.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Bác Sĩ 9902
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            149.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 3 */}
                  {/* Sản Phẩm 4 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoidongvat/do-choi-mo-hinh-dong-vat-rung-ht7503-1.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Động Vật Rừng
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            152.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 4 */}
                </div>
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/VECTO-YD-218.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          VECTO-YD-218
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            3.000.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoimaybay-taulua/TL-Thomas.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Tàu Lửa Thomas
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            200.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 2 */}
                  {/* Sản Phẩm 3 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoibacsi/bo-do-choi-bac-si-9902-cho-be-yeu-1.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Bác Sĩ 9902
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            149.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 3 */}
                  {/* Sản Phẩm 4 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href>
                          <img
                            alt=""
                            src={require("../../img/Dochoidongvat/do-choi-mo-hinh-dong-vat-rung-ht7503-1.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-6">
                          Động Vật Rừng
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            152.000đ
                          </span>
                        </div>{" "}
                        {/* Small countdown */}
                      </div>
                      <div className="links">
                        <div className="pt-1 pb-1 mt-1">
                          <a
                            href
                            className="text-decoration-none text-white text-uppercase fw-bolder"
                          >
                            Xem Chi Tiết
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sản Phẩm 4 */}
                </div>
              </div>
              <div className="col-lg-3 d-none d-sm-block">
                <img
                  alt=""
                  src={require("../../img/quangcao2.png")}
                  style={{ width: "100%" }}
                  height={550}
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Product */}
        {/* End Product */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Trangchu;
