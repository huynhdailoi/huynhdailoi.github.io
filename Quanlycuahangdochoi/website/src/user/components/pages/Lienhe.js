import React from "react";

const Lienhe = () => {
  return (
    <div>
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
        {/*OffCanvas Tìm Kiếm */}
        <div
          className="offcanvas offcanvas-top"
          tabIndex={-1}
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasTopLabel">Offcanvas top</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">...</div>
        </div>
        {/*OffCanvas Tìm Kiếm */}
        {/*Kết Thúc Navigation */}
        {/* Bắt Đầu Title Content */}
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
                        Liên Hệ
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Kết Thúc Title Content */}
        {/* Làm content ở đây */}
        <div
          className="container-fluid border"
          style={{ height: "50%", backgroundColor: "rgb(241,241,241)" }}
        >
          <div
            className="container px-1 pt-5"
            style={{ paddingBottom: "30px" }}
          >
            <div className="row" style={{ backgroundColor: "white" }}>
              <div className="col-12 my-2">
                <h1 className="text-center my-1">Liên Hệ</h1>
              </div>
              <div className="col-lg-7">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control inputControl"
                    id="HovaTenInput"
                    placeholder="Họ & Tên *"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control inputControl"
                    id="sdtInput"
                    placeholder="Số điện thoại *"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control inputControl"
                    id="emailInput"
                    placeholder="Email *"
                    style={{ width: "100%" }}
                  />{" "}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="mb-3">
                  <textarea
                    className="form-control inputControl"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    style={{ width: "100%" }}
                    placeholder="Nội dung *"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-12 my-2 pb-3">
                <button className="buttonSubmit" type="button">
                  Gửi
                </button>
              </div>
            </div>
            <div className="pt-3">
              <div
                className="row justify-content-lg-center text-center border"
                style={{ backgroundColor: "white" }}
              >
                <div className="col-lg-4 text-center">
                  <div className="my-3">
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ fontSize: "30px", color: "rgb(255, 92, 0)" }}
                    />
                    <p
                      className="text-uppercase fw-bold pt-3"
                      style={{ fontSize: "15px" }}
                    >
                      Địa chỉ
                    </p>
                    <p
                      className="my-1"
                      style={{ fontSize: "15px", marginBottom: "10px" }}
                    >
                      702/56, Lê Đức Thọ, Quận Gò Vấp, TP Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="my-3">
                    <i
                      className="fas fa-phone-alt"
                      style={{ fontSize: "30px", color: "rgb(255, 92, 0)" }}
                    />
                    <p
                      className="text-uppercase fw-bold pt-3"
                      style={{ fontSize: "15px" }}
                    >
                      Đường dây nóng
                    </p>
                    <p
                      className="my-1"
                      style={{ fontSize: "15px", marginBottom: "10px" }}
                    >
                      (+038)4757113 - (+090)7851291
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="my-3">
                    <i
                      className="fas fa-envelope"
                      style={{ fontSize: "30px", color: "rgb(255, 92, 0)" }}
                    />
                    <p
                      className="text-uppercase fw-bold pt-3"
                      style={{ fontSize: "15px" }}
                    >
                      Email
                    </p>
                    <p
                      className="my-1"
                      style={{ fontSize: "15px", marginBottom: "10px" }}
                    >
                      khuongph20.cdsg@saigontech.edu.vn
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Làm content ở đây */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Lienhe;
