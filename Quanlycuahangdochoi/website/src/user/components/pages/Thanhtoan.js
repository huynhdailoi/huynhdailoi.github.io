import React from "react";

const Thanhtoan = () => {
  return (
    <div>
      {/*OffCanvas Giỏ Hàng */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: "650px" }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Giỏ Hàng
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row justify-content-around">
              <div
                className="col-lg-4"
                style={{ borderBottom: "2px solid /#000" }}
              >
                Sản Phẩm
              </div>
              <div
                className="col-lg-2"
                style={{ borderBottom: "2px solid /#000" }}
              >
                Giá
              </div>
              <div
                className="col-lg-3"
                style={{ borderBottom: "2px solid /#000" }}
              >
                Số Lượng
              </div>
            </div>
            {/* Sản phẩm 1 */}
            <div className="row justify-content-around pt-2">
              <div className="col-lg-4">
                <div
                  className="row justify-content-around"
                  style={{ borderBottom: "2px solid /#000" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../img/DoChoiXeMoHinh/BMW-GTS.png")}
                      alt="Xe Chở hàng"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="col-7" style={{ marginTop: "30px" }}>
                    Xe Chở Cát
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="row justify-content-center">
                  <div
                    style={{
                      paddingBottom: "25.5px",
                      borderBottom: "2px solid /#000",
                    }}
                  >
                    <div
                      style={{ marginTop: "30px", textAlign: "center" }}
                      className="text-truncate"
                    >
                      318,000
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="row justify-content-around"
                  style={{
                    borderBottom: "2px solid /#000",
                    paddingBottom: "17px",
                  }}
                >
                  <div className="col-5" style={{ marginTop: "25px" }}>
                    <input
                      type="number"
                      style={{ width: "100%", height: "35px" }}
                      defaultValue={1}
                      className="text-center"
                    />
                  </div>
                  <div className="col-7" style={{ marginTop: "25px" }}>
                    <button type="button" className="btn btn-danger">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Sản Phẩm 2 */}
            <div className="row justify-content-around pt-2">
              <div className="col-lg-4">
                <div
                  className="row justify-content-around"
                  style={{ borderBottom: "2px solid /#000" }}
                >
                  <div className="col-5">
                    <img
                      src="../../img/DoChoiXeMoHinh/xechocat.jpg"
                      alt="Xe Chở hàng"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="col-7" style={{ marginTop: "30px" }}>
                    Xe Chở Cát
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="row justify-content-center">
                  <div
                    style={{
                      paddingBottom: "25.5px",
                      borderBottom: "2px solid /#000",
                    }}
                  >
                    <div
                      style={{ marginTop: "30px", textAlign: "center" }}
                      className="text-truncate"
                    >
                      318,000
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="row justify-content-around"
                  style={{
                    borderBottom: "2px solid /#000",
                    paddingBottom: "17px",
                  }}
                >
                  <div className="col-5" style={{ marginTop: "25px" }}>
                    <input
                      type="number"
                      style={{ width: "100%", height: "35px" }}
                      defaultValue={1}
                      className="text-center"
                    />
                  </div>
                  <div className="col-7" style={{ marginTop: "25px" }}>
                    <button type="button" className="btn btn-danger">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-footer" style={{ marginBottom: "20px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-end border-bottom border-2">
                <span className="fw-bold fs-4">Tổng Cộng : 633,000đ</span>
              </div>
            </div>
            <div className="row pt-1">
              <div className="col-12 text-end">
                <button type="button" className="btn btn-light">
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
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
            <div className="col-xl col-lg-12 text-start mt-3"></div>
          </div>
        </div>
      </div>
      {/* Kết Thúc Back Ground */}
      <div
        className="container-fluid border"
        style={{ height: "50%", backgroundColor: "rgb(241,241,241)" }}
      >
        <div className="container px-1 pt-5" style={{ paddingBottom: "30px" }}>
          <div
            className="row justify-content-center"
            style={{ backgroundColor: "/#fff" }}
          >
            <div className="col-lg-11 mt-4">
              <div className="row justify-content-center row-cols-4 border-bottom border-3">
                <div className="col ps-4">Sản Phẩm</div>
                <div className="col text-center">Giá(VNĐ)</div>
                <div className="col text-center">Số lượng</div>
                <div className="col text-end">Tổng</div>
              </div>
              <div className="row justify-content-center border-bottom">
                <div className="col-3 p-2">
                  <a
                    href
                    className="text-decoration-none me-3 fs-4 text-secondary"
                  >
                    <i className="fas fa-times-circle" />
                  </a>
                  <img
                    className="img-thumbnail"
                    src={require("../../img/DoChoiXeMoHinh/xechocat.jpg")}
                    alt=""
                    style={{ width: "120px" }}
                  />
                </div>
                <div className="col-3 text-center">
                  <p className="mt-5 text-danger fs-5">318,000</p>
                </div>
                <div className="col text-center">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    max={10}
                    className="mt-5 text-center "
                    defaultValue={1}
                  />
                </div>
                <div className="col text-end">
                  <p className="mt-5 text-danger fs-5">318,000</p>
                </div>
              </div>
              <div className="row justify-content-center border-bottom">
                <div className="col-3 p-2">
                  <a
                    href
                    className="text-decoration-none me-3 fs-4 text-secondary"
                  >
                    <i className="fas fa-times-circle" />
                  </a>
                  <img
                    className="img-thumbnail"
                    src={require("../../img/dochoicongnghe/KIDBO-K100.png")}
                    alt=""
                    style={{ width: "120px" }}
                  />
                </div>
                <div className="col-3 text-center">
                  <p className="mt-5 text-danger fs-4">1,500,000</p>
                </div>
                <div className="col-3 text-center">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min={1}
                    max={10}
                    className="mt-5 text-center"
                    defaultValue={1}
                  />
                </div>
                <div className="col-3 text-end">
                  <p className="mt-5 text-danger fs-5">1,500,000</p>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col">
                  <a href="SanPham.html" className="btn btn-outline-danger">
                    <i className="fas fa-long-arrow-alt-left me-1" />
                    TIẾP TỤC XEM SẢN PHẨM
                  </a>
                </div>
              </div>
            </div>
            {/* Bắt Đầu Column Sản Phẩm */}
            <div className="col-lg-7 me-1 border-top border-3 mt-5">
              {/* Bắt Đầu Column Sản Phẩm */}
              <div className="row justify-content-center mb-2 mt-2">
                <div className="col-lg-12 fs-3 ">THÔNG TIN THANH TOÁN</div>
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="hoten"
                    aria-describedby="hotenHelp"
                    placeholder="Họ và Tên"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Địa chỉ giao hàng"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="admin@gmail.com"
                  />
                </div>
                <div className="mb-4 border-top">
                  <div className="fs-5 mt-2">THÔNG TIN THÊM</div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Ghi Chú
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </form>
              {/* kết Thứ Column Sản Phẩm */}
            </div>
            {/* kết Thứ Column Sản Phẩm */}
            <div
              className="col-lg-4 border border-primary border-3 mt-5"
              style={{ height: "50%" }}
            >
              {/* Bắt Đầu Danh Sách SP */}
              <div className="row justify-content-center mb-2">
                <div className="col-lg-12 fs-4 text-center mt-2 mb-2">
                  ĐƠN HÀNG CỦA BẠN
                </div>
                <div className="row mt-2 mb-2">
                  <div className="row justify-content-between">
                    <div className="col-4">Sản Phẩm</div>
                    <div className="col-4 text-end">Tổng</div>
                  </div>
                  <span className="border-bottom" />
                </div>
                <div className="row">
                  <div className="row justify-content-between mt-2 mb-2">
                    <div className="col-6">
                      <span className="me-2 fw-bold">Xe chở cát</span>{" "}
                      <span>x 1</span>
                    </div>
                    <div className="col-6 text-danger text-end">318,000đ</div>
                  </div>
                  <div className="row justify-content-between mt-2 mb-2">
                    <div className="col-6">
                      <span className="fw-bold">Robot </span> <span>x 1</span>
                    </div>
                    <div className="col-6 text-danger text-end">1,500,000đ</div>
                  </div>
                  <span className="border-bottom" />
                </div>
                <div className="row mt-2 mb-2">
                  <div className="row justify-content-between">
                    <div className="col-4">Tổng phụ</div>
                    <div className="col-4 text-end text-danger">1,818,000đ</div>
                  </div>
                  <span className="border-bottom" />
                </div>
                <div className="row mt-2 mb-2">
                  <div className="row justify-content-between">
                    <div className="col-4">Tổng</div>
                    <div className="col-4 text-end text-danger fw-bold fs-5">
                      1,818,000đ
                    </div>
                  </div>
                  <span className="border-bottom" />
                </div>
                <div className="row mt-1 mb-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                      style={{ fontSize: "15px" }}
                    >
                      Thanh toán chuyển khoản
                    </label>
                  </div>
                </div>
                <div className="row mt-2 mb-2">
                  <div className="row justify-content-between">
                    <div className="col-12 fs-5">Thanh Toán chuyển khoản</div>
                  </div>
                  <span className="border-bottom" />
                </div>
                <div className="row mt-1 mb-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                      style={{ fontSize: "15px" }}
                    >
                      Thanh toán khi nhận hàng (COD)
                    </label>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-lg-4">
                    <button className="btn btn-primary" type="submit">
                      Đặt Hàng
                    </button>
                  </div>
                </div>
              </div>
              {/* Kết Thúc Danh Sách SP*/}
            </div>
          </div>
        </div>
        {/* End Product */}
      </div>
      {/* End Product */}
      {/* Footer */}
    </div>
  );
};

export default Thanhtoan;
