import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chitietsanpham = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <ToastContainer position="top-end" className="p-3">
          <Toast
            bg="success"
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Thông báo</strong>
              <small>11 giây trước</small>
            </Toast.Header>
            <Toast.Body className="text-white">
              Sản phẩm đã thêm vào giỏ hàng
            </Toast.Body>
          </Toast>
        </ToastContainer>
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
                        Sản Phẩm
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Xe Tải
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Chi Tiết Xe Tải
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
              {/* Bắt Đầu Danh Sách SP */}
              <div
                className="col-lg-3 rounded-4 me-3"
                style={{ height: "50%" }}
              >
                {/* Bắt Đầu Danh Sách SP */}
                <div
                  className="row  rounded-4"
                  style={{ backgroundColor: "rgb(255,255,255)" }}
                >
                  <p className="fw-bold fs-4 text-center  pt-2 pb-2 rounded-4 bg-dark text-white">
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
                {/* Kết Thúc Danh Sách SP*/}
              </div>
              {/* Kết Thúc Danh Sách SP */}
              {/* Bắt Đầu Column Sản Phẩm */}
              <div
                className="col-lg-8 border rounded-4"
                style={{ backgroundColor: "white" }}
              >
                {/* Bắt Đầu Column Sản Phẩm */}
                <div>
                  <div className="row">
                    {/* Hình SP */}
                    <div className="col-lg-6 pb-2">
                      <div className="prod_hold sale  prod_visible">
                        <div
                          className="image thumbNail"
                          style={{ border: "none" }}
                        >
                          <a href>
                            <img
                              alt=""
                              src={require("../../img/DoChoiXeMoHinh/xechocat.jpg")}
                              style={{ width: "100%" }}
                            />
                          </a>
                        </div>
                        <div className="d-flex text-center">
                          <a href>
                            <img
                              src="../../img/DoChoiXeMoHinh/xechocat3.jpg"
                              alt=""
                              width={100}
                              className="img-thumbnail me-1"
                            />
                          </a>
                          <a href>
                            <img
                              src="../../img/DoChoiXeMoHinh/xechocat3.jpg"
                              alt=""
                              width={100}
                              className="img-thumbnail me-1"
                            />
                          </a>
                          <a href>
                            <img
                              src="../../img/DoChoiXeMoHinh/xechocat3.jpg"
                              alt=""
                              width={100}
                              className="img-thumbnail me-1"
                            />
                          </a>
                          <a href>
                            <img
                              src="../../img/DoChoiXeMoHinh/xechocat3.jpg"
                              alt=""
                              width={100}
                              className="img-thumbnail"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Hình SP */}
                    {/* Cột Chi Tiết SP  */}
                    <div className="col-lg-6">
                      <p className="fs-4 mt-4 border-bottom border-2">
                        Xe Chở Cát
                      </p>
                      <div className="d-block">
                        <p
                          className="border text-center text-white"
                          style={{
                            width: "25%",
                            backgroundColor: "rgb(111,203,37)",
                            fontSize: "15px",
                          }}
                        >
                          <i className="fas fa-check me-1" />
                          Còn hàng
                        </p>
                      </div>
                      <p
                        className="mt-3 fw-normal"
                        style={{ fontSize: "15px" }}
                      >
                        Mã Sản Phẩm : <span className="fw-bold">8992A-2</span>{" "}
                      </p>
                      <p style={{ fontSize: "50px" }} className="text-danger">
                        318,000 ₫
                      </p>
                      <input
                        type="number"
                        style={{ width: "35%", height: "35px" }}
                        defaultValue={1}
                        className="text-center form-control"
                      />
                      <p className="mt-3">
                        - Xem chi tiết phí vận chuyển{" "}
                        <a href className="text-decoration-none">
                          tại đây
                        </a>
                      </p>
                      <div className="pb-4">
                        <button
                          onClick={() => setShow(true)}
                          type="submit"
                          className="cart text-uppercase fas fa-shopping-basket me-2"
                        >
                          THÊM VÀO GIỎ
                        </button>
                        <Link
                          to="/thanhtoan"
                          className="btn text-white bg-danger buy text-uppercase "
                        >
                          <i className="fas fas fa-plus" /> mua hàng
                        </Link>
                      </div>
                      <div className="border-top border-bottom">
                        <p className="mt-3" style={{ fontSize: "17px" }}>
                          Sản phẩm Chất Liệu:{" "}
                          <span className="fw-bold">nhựa an toàn</span>{" "}
                        </p>
                      </div>
                      <div className="border-bottom">
                        <p className="mt-3" style={{ fontSize: "17px" }}>
                          Sản phẩm Độ Tuổi Sử Dụng:{" "}
                          <span className="fw-bold">từ 3 tuổi trở lên</span>{" "}
                        </p>
                      </div>
                      <div className>
                        <p className="mt-3" style={{ fontSize: "17px" }}>
                          Danh Mục:{" "}
                          <a
                            href
                            className="text-decoration-none"
                            style={{ color: "rgb(27,189,221)" }}
                          >
                            xe đồ chơi
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                    {/* Cột Chi Tiết SP */}
                  </div>
                  <div className="row">
                    <ul className="nav nav-tabs">
                      <li
                        className="nav-item text-center"
                        style={{ width: "15%" }}
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/#"
                        >
                          Mô Tả
                        </a>
                      </li>
                    </ul>
                    <p className="fs-3 pt-1">
                      Giới thiệu Đồ chơi xe Ben chở cát nước cho bé loại to
                      8992A-2
                    </p>
                    <div className="d-block">
                      <p>
                        Là cha mẹ ngoài nỗi lo làm sao cho con phát triển trọn
                        vẹn về thể chất. Các bậc phụ huynh còn mong muốn các con
                        được thông minh và nhanh nhẹn.
                      </p>
                      <p>
                        Các nghiên cứu đã chỉ ra rằng,đồ chơi đóng một vai trò
                        rất quan trọng đối với sự phát triển của trẻ.Thông qua
                        đồ chơi trẻ sẽ hiểu biết hơn về thế giới xung quanh,phát
                        triển trí tuệ ,cảm xúc cũng như tinh thần. Chơi là cuộc
                        sống của trẻ, vì vậy việc lựa chọn đồ chơi cho trẻ luôn
                        được các bậc cha mẹ đặc biệt quan tâm.
                      </p>
                      <p>
                        Bộ đồ chơi là mô hình loại lớn để bé có thể chở cát,
                        nước khi chơi cùng cha mẹ hay đi chơi ở bãi biển.
                      </p>
                      <p>
                        Thiết kế bắt mắt và giống xe thực tế giúp bé vô cùng
                        thích thú khi chơi,đặc biệt chế tạo bằng vật liệu an
                        toàn.
                      </p>
                      <p>
                        Đây là món quà vô cùng thú vị dành cho các bé trai nhân
                        dịp lễ tết,sinh nhật,tết thiếu nhi,chắc chắn bé sẽ thích
                        thú khi nhận món quà ý nghĩa này
                      </p>
                    </div>
                    <p className="text-uppercase fw-bold fs-5 mt-3">
                      CHI TIẾT SẢN PHẨM
                    </p>
                    <div className="text-center">
                      <table
                        className="table table-striped"
                        style={{ width: "100%" }}
                      >
                        <tbody>
                          <tr>
                            <td>Mã</td>
                            <td>8992A-2</td>
                          </tr>
                          <tr>
                            <td>Kho</td>
                            <td>TP HCM</td>
                          </tr>
                          <tr>
                            <td>Số Lượng</td>
                            <td>50</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietsanpham;
