/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Dotuoi = () => {
  return (
    <div>
      {" "}
      <div>
        {/*OffCanvas Giỏ Hàng */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Offcanvas right
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">...</div>
        </div>
        {/*OffCanvas Giỏ Hàng */}
        {/*Kết Thúc Navigation */}
        {/* Bắt Đầu Back Ground */}
        <div
          className="container-fluid border-bottom border-3"
          style={{ backgroundColor: "rgb(230,230,230)" }}
        >
          <div className="container">
            <div className="row justify-content-lg-center pt-1">
              <div className="col-xl col-lg-12 text-start mt-3">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/#" className="text-decoration-none text-dark">
                        Trang Chủ
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/#" className="text-decoration-none text-dark">
                        Độ Tuổi
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/#" className="text-decoration-none text-dark">
                        {" "}
                        1-5
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Kết Thúc Back Ground */}
        <div
          className="container-fluid border"
          style={{ height: "50%", backgroundColor: "rgb(241,241,241)" }}
        >
          <div
            className="container px-1 pt-5"
            style={{ paddingBottom: "30px" }}
          >
            <div className="row">
              {/* Bắt Đầu tavbar */}
              <div className="col-lg-3 rounded-4" style={{ height: "50%" }}>
                {/* Bắt Đầu tavbar */}
                <div
                  className="row rounded-4"
                  style={{ backgroundColor: "rgb(255,255,255)" }}
                >
                  <p className="fw-bold fs-4 text-center pt-2 pb-2 rounded-4 bg-dark text-white">
                    <em>
                      <i className="fas fa-align-left text-white" />
                      Danh Mục Sản Phẩm
                    </em>
                  </p>
                  <div className="Tabs">
                    <ul className="ulTabs ">
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
                            <i className="fas fa-baby" />
                          </span>{" "}
                          Búp Bê
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-tags" />
                          </span>{" "}
                          Đồ Chơi Đồng Giá
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-graduation-cap" />
                          </span>{" "}
                          Đồ Chơi Học Tập
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light border-bottom">
                          <span className="spanTabs">
                            <i className="fas fa-music" />
                          </span>{" "}
                          Đồ Chơi Nhạc Cụ
                        </li>
                      </a>
                      <a href className="text-decoration-none text-dark">
                        <li className="liTabs fw-light">
                          <span className="spanTabs">
                            <i className="fas fa-baseball-ball" />
                          </span>{" "}
                          Đồ Chơi Vận Động
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div className="pt-3">
                  <div
                    className="row border rounded-4"
                    style={{ backgroundColor: "rgb(255,255,255)" }}
                  >
                    <p className="fw-bold fs-4 text-center border pt-2 pb-2 rounded-4 bg-dark text-white">
                      <em>Lọc Theo Giá</em>
                    </p>
                    <div className style={{ marginLeft: "15px" }}>
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          500.000
                        </label>
                      </div>
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          1.000.000
                        </label>
                      </div>
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          1.500.000
                        </label>
                      </div>
                      <div className="form-check my-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          2.000.000
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label pb-2"
                          htmlFor="flexCheckChecked"
                        >
                          3.000.000
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Kết Thúc tavbar */}
              </div>
              {/* Kết Thúc tavbar */}
              {/* Bắt Đầu Column Sản Phẩm */}
              <div className="col-lg-9">
                {/* Bắt Đầu Column Sản Phẩm */}
                {/* Đồ Chơi gỗ  */}
                <div className="row">
                  <div className="col">
                    <div id="nz-div">
                      <h3 className="tde">
                        <span className="null fw-bold">
                          <i className="fas fa-arrows-alt-h me-2 fs-5" />
                          Độ tuổi 6 - 13
                        </span>
                      </h3>
                      <div className="sub-cat">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination justify-content-center">
                            <li className="page-item me-3">
                              <select
                                className="form-select mt-1"
                                aria-label="Default select example"
                                style={{ border: "none" }}
                              >
                                <option selected>Theo Thứ tự</option>
                                <option value={1}>Cao Nhất</option>
                                <option value={2}>Trung Bình</option>
                                <option value={3}>Thấp nhất</option>
                              </select>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-xl col-lg-3 pb-2">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - GTS{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
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
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/SVJ-Lamborghini.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Lamborghini SVJ
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.499.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-M5-F90.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - F90{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.750.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BWM-S1000RR.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            546.000đ
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
                  {/* Sản Phẩm 1 */}
                  <div className="col-xl col-lg-3 pb-2">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - GTS{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
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
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/SVJ-Lamborghini.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Lamborghini SVJ
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.499.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-M5-F90.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - F90{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.750.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BWM-S1000RR.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            456.000đ
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
                {/* Đồ Chơi gỗ  */}
                {/* Đồ Chơi Thông Minh  */}
                <div className="row">
                  {/* Sản Phẩm 1 */}
                  <div className="col-xl col-lg-3 pb-2">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - GTS{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
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
                  {/* Sản Phẩm 1 */}
                  {/* Sản Phẩm 2 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/SVJ-Lamborghini.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Lamborghini SVJ
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.499.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BMW-M5-F90.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM - F90{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            1.750.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/BWM-S1000RR.jpg")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            456.000đ
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
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xedorac.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Đổ Rác
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            235.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecontainer.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            699.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xequansu.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Quân sự
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            500.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecau.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Cẩu
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            400.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xedorac.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Đổ Rác
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            235.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecontainer.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            699.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xequansu.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Quân sự
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            500.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecau.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Cẩu
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            400.000đ
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
                  {/* Sản Phẩm 1 */}
                  <div className="col-lg-3">
                    <div className="prod_hold sale  prod_visible">
                      <div className="image thumbNail">
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xedorac.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Đổ Rác
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            235.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecontainer.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          BWM-S1000RR{" "}
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            699.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xequansu.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Quân sự
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            500.000đ
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
                        <a href="DetailsProduct.html">
                          <img
                            src={require("../../img/DoChoiXeMoHinh/xecau.png")}
                            style={{ width: "100%" }}
                          />
                        </a>
                      </div>
                      <div className="babystreet-list-prod-summary">
                        <a href className="text-decoration-none text-dark fs-5">
                          Xe Cẩu
                        </a>
                        <div className="price_hold">
                          <del aria-hidden="true"></del>
                          <span className="fs-5 text-danger fw-bold">
                            400.000đ
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
                {/* Đồ chơi mô hình  */}
                {/* <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center pt-4">
                    <li className="page-item me-5">
                      <a
                        className="page-link rounded-circle fs-5 text-dark "
                        href="/#"
                      >
                        <i className="fas fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a
                        className="page-link fs-5 rounded-circle text-dark"
                        href="/#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a
                        className="page-link fs-5 rounded-circle text-dark"
                        href="/#"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item me-5">
                      <a
                        className="page-link fs-5 rounded-circle text-dark"
                        href="/#"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle fs-5 text-dark"
                        href="/#"
                      >
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </nav> */}
                {/* kết Thứ Column Sản Phẩm */}
              </div>
              {/* kết Thứ Column Sản Phẩm */}
            </div>
          </div>
          {/* End Product */}
        </div>
        {/* End Product */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Dotuoi;
