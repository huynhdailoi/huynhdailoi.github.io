import React from "react";
import { Link } from "react-router-dom";

const Tintuc = () => {
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
                        Tin Tức
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
          className="container-fluid border pt-4"
          style={{ height: "50%", backgroundColor: "rgb(241,241,241)" }}
        >
          <div className="container px-1" style={{ paddingBottom: "30px" }}>
            {/* Rows 1 */}
            <div className="row bg-white">
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/5diachidochoi.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <Link
                      to="/chitiettintuc"
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Các cơ sở bán đồ chơi sỉ TPHCM uy tín nhất hiện nay
                    </Link>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        30/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Đồ chơi trẻ em là một trong những mặt hàng kinh doanh “lợi
                      nhuận khủng” thu hút sự chú ý của rất nhiều chủ shop trong
                      những năm gần đây....
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/dochoisi.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      [Góc giải đáp] Tìm mua sỉ đồ chơi ở đâu giá tốt - Chất
                      lượng?
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        30/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Mua sỉ đồ chơi ở đâu giá tốt? Đây có lẽ là câu hỏi mà
                      nhiều chủ đầu tư khi mới bắt đầu khởi nghiệp đều đang vô
                      cùng bâng khuâng vì không biết tìm...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Rows 1 */}
            {/* Rows 2 */}
            <div className="row bg-white">
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/kinhnghiem.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Những kinh nghiệm cần biết để mở cửa hàng đồ chơi trẻ em
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        30/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Đối với những người muốn mở cửa hàng đồ chơi trẻ em, không
                      đơn giản chỉ là nhập và bán hàng, nó đòi hỏi rất nhiều kỹ
                      năng và sự thấu hiểu tâm lý trẻ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/dochoihoctap.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Đồ chơi học tập phát triển trí thông minh cho trẻ
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        29/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Đồ chơi học tập là một trong các loại đồ chơi có công dụng
                      vô cùng quan trọng và cần thiết đối với những sự phát
                      triển của trẻ nhỏ. Vậy các bậc phụ huynh...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Rows 2 */}
            {/* Rows 3 */}
            <div className="row bg-white">
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/chodaumoi.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Kinh nghiệm lựa chọn mua hàng tại chợ đầu mối đồ chơi trẻ
                      em
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        25/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Từ lâu chợ đầu mối đồ chơi trẻ em đã trở thành một cụm từ
                      quen thuộc mà những người buôn bán lâu năm trong nghề
                      thường nhắc đến. Trước đây, chắc hẳn các chủ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/top8.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Top 8 web bán đồ chơi trẻ em mẫu mã đẹp, giá rẻ bất ngờ!
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        28/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Trên thị trường hiện nay, web bán đồ chơi trẻ em chắc hẳn
                      đã không còn quá xa lạ với người tiêu dùng hiện nay. Nhưng
                      kiếm được một website mua đồ chơi trẻ em...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Rows 3 */}
            {/* Rows 4 */}
            <div className="row bg-white">
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/top7.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Top 7 công ty sản xuất đồ chơi trẻ em hàng đầu Việt Nam
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        30/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Ngày nay, trên thị trường đồ chơi trẻ đang ngày một có
                      thêm nhiều đơn vị tham gia cạnh để thu lợi nhuận. Dẫn đến
                      hệ quả tất yếu là ngày càng có nhiều sản...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl col-lg-6 my-2">
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      src={require("../../img/tintuc/phanphoi.png")}
                      alt=""
                      style={{ width: "100%" }}
                      height={171}
                    />
                  </div>
                  <div className="col-sm-7">
                    <a
                      href
                      className="text-decoration-none text-dark fw-bold"
                      style={{ fontSize: "18px" }}
                    >
                      Địa chỉ phân phối đồ chơi giá rẻ, uy tín, chất lượng cho
                      trẻ em
                    </a>
                    <div className="row">
                      <div
                        className="col-md-4 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        30/5/2021
                      </div>
                      <div
                        className="col-md-5 offset-md-3 text-secondary mt-1"
                        style={{ fontSize: "15px" }}
                      >
                        Lượt xem: 0
                      </div>
                    </div>
                    <p
                      className="mt-2 text-secondary"
                      style={{ fontSize: "15px" }}
                    >
                      Hiện nay trên thị trường có rất nhiều địa chỉ phân phối đồ
                      chơi giá rẻ cho trẻ em, tuy nhiên để chọn được cửa hàng uy
                      tín về chất lượng, nguồn gốc rõ ràng,...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Rows 4 */}
            <div
              className="row justify-content-lg-end"
              style={{ backgroundColor: "white" }}
            >
              <div className="col-xl">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center pt-4">
                    <li className="page-item me-2">
                      <a
                        className="page-link text-dark rounded-circle"
                        href="/#"
                        style={{ border: "none" }}
                      >
                        <i className="fas fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a
                        className="page-link rounded-circle text-dark"
                        href="/#"
                      >
                        1
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a
                        className="page-link rounded-circle text-dark"
                        href="/#"
                      >
                        2
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a
                        className="page-link rounded-circle text-dark"
                        href="/#"
                      >
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link rounded-circle text-dark"
                        href="/#"
                        style={{ border: "none" }}
                      >
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Container */}
          </div>
          {/* Container */}
          {/* Container-fluid */}
        </div>
        {/* Container-fluid */}
        {/* Làm content ở đây */}
        {/* Footer */}
      </div>
    </div>
  );
};

export default Tintuc;
