import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  return (
    <div>
      <div
        className="container-fluid"
        style={{ height: "20%", backgroundColor: "rgb(230,230,230)" }}
      >
        <div className="container ">
          <div className="row justify-content-lg-center">
            <div className="col-6 d-none d-sm-block my-1">
              Bạn Có Thể Đăng Ký Hoặc Đăng Nhập
            </div>
            <div
              className="col-md-6 col-sm-12 text-end my-1"
              style={{ height: "10px" }}
            >
              <nav
                style={{ width: "100%", height: "100%", paddingLeft: "50%" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="true" className="text-decoration-none text-dark">
                      Đăng Nhập
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="true" className="text-decoration-none text-dark">
                      Đăng Ký
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid border-top border-4">
        <div className="container pt-2 pb-1">
          <div className="row pt-3 row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col text-start  d-none d-sm-block">
              <div className="row">
                <a
                  href
                  className="navbar-brand text-decoration-none fs-2 text-uppercase mt-1"
                >
                  Toy Story
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-2 me-2">
                  <i
                    className="d-inline fas fa-hand-holding-usd text-dark"
                    style={{ fontSize: "35px" }}
                  />
                </div>
                <div className="col-9 text-start">
                  <p
                    className="d-inline text-uppercase"
                    style={{ fontSize: "12px" }}
                  >
                    Thanh Toán Giao Hàng
                  </p>
                  <p className="opacity-50" style={{ fontSize: "11px" }}>
                    Tùy Chọn Tiền Mặt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-2 me-2">
                  <i
                    className="d-inline fas fa-shipping-fast text-dark"
                    style={{ fontSize: "35px" }}
                  />
                </div>
                <div className="col-9">
                  <p
                    className="d-inline text-uppercase"
                    style={{ fontSize: "12px" }}
                  >
                    Miễn Phí Vận Chuyển
                  </p>
                  <p className="opacity-50" style={{ fontSize: "11px" }}>
                    Miễn Phí Giao Hàng Đơn Đầu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-2 me-2">
                  <i
                    className="d-inline fas fa-user-shield text-dark "
                    style={{ fontSize: "35px" }}
                  />
                </div>
                <div className="col-9 text-start">
                  <p
                    className="d-inline text-uppercase"
                    style={{ fontSize: "12px" }}
                  >
                    Thanh Toán An Toàn
                  </p>
                  <p className="opacity-50" style={{ fontSize: "11px" }}>
                    Giao Dịch Luôn An Toàn
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row mt-2">
                <div className="col-2 me-2">
                  <i
                    className="d-inline far fa-question-circle text-dark"
                    style={{ fontSize: "35px" }}
                  />
                </div>
                <div className="col-9 text-start">
                  <p
                    className="d-inline text-uppercase"
                    style={{ fontSize: "12px" }}
                  >
                    Hỗ Trợ Trực tuyến
                  </p>
                  <p className="opacity-50" style={{ fontSize: "11px" }}>
                    Hỗ Trợ 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Bắt Đầu Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-light border"
        style={{ lineHeight: "30px", backgroundColor: "rgb(255,92,0)" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item me-3">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/website"
                >
                  Trang Chủ
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-white" to="/sanphamCH">
                  Sản Phẩm
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle me-3 text-white"
                  href="true"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GIỚI TÍNH
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/gioitinh">
                      Bé Trai
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gioitinh">
                      Bé Gái
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/gioitinh">
                      Bé Trai và Bé Gái
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3"></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle me-3 text-white"
                  href="true"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Độ Tuổi
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/dotuoi">
                      1-5 tuổi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dotuoi">
                      6-13 tuổi
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/tintuc">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/lienhe">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white" to="/gioithieu">
                  Giới thiệu
                </Link>
              </li>
            </ul>
            <div className="fw-light" style={{ width: "25%" }}>
              <div className="d-flex ">
                <button
                  className="btn btn-outline-light me-2"
                  variant="primary"
                  onClick={(e) => handleModalShow(e, "")}
                >
                  <i className="fas fa-shopping-bag fs-1 " />
                </button>
                <div className="input-group  me-4" style={{ width: "80%" }}>
                  <input
                    type="text"
                    style={{ height: "40px" }}
                    className="form-control d-none d-sm-block mt-2"
                    placeholder="Tìm Sản Phẩm"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    style={{ height: "40px" }}
                    className="input-group-text bg-dark d-none d-sm-block mt-2"
                    id="basic-addon2"
                  >
                    <i className="fas fa-search text-white " />
                  </span>
                </div>
                <Modal
                  show={showModal}
                  onHide={handleModalClose}
                  size="lg"
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Giỏ hàng</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <div className="row">
                      <div className="col-5">
                        <div className="row">
                          <div className="col text-center">Hình ảnh</div>
                          <div className="col">Tên sản phẩm</div>
                        </div>
                      </div>
                      <div className="col">Số lượng</div>
                      <div className="col text-center">Đơn giá(VNĐ)</div>
                      <div className="col text-center">Hành động</div>
                    </div>
                    <div className="row  justify-content-center h-100 align-items-center">
                      <div className="col-5">
                        <div className="row">
                          <div className="col">
                            <img
                              alt=""
                              variant="top"
                              className="img-fluid"
                              src={require("../../img/DoChoiXeMoHinh/xechocat.jpg")}
                            />
                          </div>
                          <div className="col">
                            <div className="row justify-content-center h-100 align-items-center">
                              <div className="col">
                                <span>Xe chở cát</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          className="form-control"
                          type="number"
                          defaultValue={1}
                        />
                      </div>
                      <div className="col-4 text-center">318.000</div>
                      <div className="col text-center">
                        <a href="/#" className="text-danger me-2">
                          <i className="fas fa-trash-alt fs-5" />
                        </a>
                      </div>
                    </div>
                    <div className="row  justify-content-center h-100 align-items-center">
                      <div className="col-5">
                        <div className="row">
                          <div className="col">
                            <img
                              alt=""
                              variant="top"
                              className="img-fluid"
                              src={require("../../img/dochoicongnghe/KIDBO-K100.png")}
                            />
                          </div>
                          <div className="col">
                            <div className="row justify-content-center h-100 align-items-center">
                              <div className="col">
                                <span>Robot</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <input
                          className="form-control"
                          type="number"
                          defaultValue={1}
                        />
                      </div>
                      <div className="col-4 text-center">1.500.000</div>
                      <div className="col text-center">
                        <a href="/#" className="text-danger me-2">
                          <i className="fas fa-trash-alt fs-5" />
                        </a>
                      </div>
                    </div>
                  </Modal.Body>

                  <Modal.Footer>
                    <Link
                      className="btn btn-success"
                      to="/thanhtoan"
                      onClick={handleModalClose}
                    >
                      Thanh toán
                    </Link>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
