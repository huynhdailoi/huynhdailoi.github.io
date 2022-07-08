import React from "react";

const Gioithieu = () => {
  return (
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
                      Giới thiệu
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
        <div className="container px-1 pt-5" style={{ paddingBottom: "30px" }}>
          <div className="row" style={{ backgroundColor: "white" }}>
            <div className="fw-bold fs-3" style={{ color: "rgb(255,92,0)" }}>
              GIỚI THIỆU
            </div>
            <p />
            <p>
              Shop đồ chơi trẻ em hiện đang kinh doanh dưới hình thức bán hàng
              trực tuyến trên mạng thông qua số điện thoại đường dây nóng. Shop
              có dịch vụ giao hàng trên toàn quốc, vì vậy các bạn có thể truy
              cập và đặt hàng ở bất cứ nơi đâu. Để được tư vấn mua hàng nhanh
              gọn và tiện lợi hơn các bạn có thể trực tiếp đến mua hàng tại
              Shop.
            </p>
            <div className="text-center">
              <img
                src={require("../../img/dochoicongnghe/Kaizhi-Y6.png")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Đến với shop đồ chơi trẻ em, các bạn có thể lựa chọn sản phẩm đến
              từ những thương hiệu đồ chơi nổi tiếng trên thế giới như: Lắp ráp
              Lego của Đan Mạch; Búp bê Barbie, Xe HotWheels thuộc tập đoàn
              Mattel của Mỹ; Đất nặn Play-Doh của Mỹ; Thương hiệu đất nặn Let’s
              của Thổ Nhĩ Kỳ; Đất nặn Tuti Frutti của Canada; Đồ chơi nấu ăn
              Just For Chef của Hồng Kông với các thương hiệu ngày các được mở
              rộng. Bên cạnh đó, các bạn còn có thể tìm thấy được các thương
              hiệu đồ chơi Việt Nam xuất khẩu như: Anto, Toy Bricks, Blocks…,
              những thương hiệu đã tìm được chỗ đứng trên thị trường thế giới.
            </p>
            <div className="text-center">
              <img
                src={require("../../img/đồ chơi thể thao/f5b587869a433ee80e935b60209b7c11.jpg")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Về mẫu mã, shop đồ chơi trẻ em mang đến cho các bạn rất nhiều sự
              lựa chọn về sản phẩm cũng như dịch vụ đi kèm, mang lại cho khách
              hàng sự hài lòng về một địa chỉ mua sắm đồ chơi trẻ em. Tất cả các
              mặt hàng từ búp bê, lắp ráp lego, cho đến đất nặn hay đồ chơi nấu
              ăn đều được shop nhập hàng đa dạng, phong phú các loại sản phẩm,
              cho các bạn thỏa sức lựa chọn cho bé yêu của mình. Tùy vào từng
              món sản phẩm mà shop có chương trình khuyến mãi tập viết và cặp
              xách đi kèm, cùng các sản phẩm được giảm giả với mức giá ưu đãi
              nhất.
            </p>
            <div className="text-center">
              <img
                src={require("../../img/đồ chơi nhạc cụ/do-choi-am-nhac-cho-be-dan-ghe-piano-375-new-2.jpg")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Về chất lượng, sản phẩm tại shop đến từ những thương hiệu uy tín,
              bảo đảm về mặt chất lượng, từng món sản phẩm đều được làm từ chất
              liệu chuyên dùng sản xuất đồ chơi trẻ em, cực kỳ an toàn. Các chi
              tiết được thiết kế tỉ mỉ, vị trí góc nhọn được bo tròn, tránh gây
              thương tích cho bé khi chơi, nên các bậc phụ huynh có thể hoàn
              toàn yên tâm lựa chọn cho bé.
            </p>
            <div className="text-center">
              <img
                src={require("../../img/đồ chơi học tập/loai-do-choi-an-toan-nhat-cho-be-143936.jpg")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Với uy tín hàng đầu, shop đồ chơi trẻ em sẽ là lựa chọn hoàn hảo
              cho các bậc phụ huynh tìm thấy những món đồ chơi phù hợp, chất
              lượng cho con yêu của mình, giúp các bé nuôi dưỡng trí tuệ và phát
              triển trí thông minh theo từng món đồ chơi.
            </p>
            <div className="text-center fw-bold">
              “Đồ chơi trẻ em nuôi dưỡng trí tuệ, ươm mầm tương lai”
              <p />
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

export default Gioithieu;
