import React from "react";

const Chitiettintuc = () => {
  return (
    <div>
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
                      Tin tức
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/#" className="text-decoration-none text-dark">
                      Các cơ sở bán đồ chơi sỉ TPHCM uy tín nhất hiện nay
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
              Các Cơ Sở Bán Đồ Chơi Sỉ TPHCM Uy Tín Nhất Hiện Nay
            </div>
            <p />
            <p>
              Đồ chơi trẻ em là một trong những mặt hàng kinh doanh “lợi nhuận
              khủng” thu hút sự chú ý của rất nhiều chủ shop trong những năm gần
              đây. Những đơn vị nào cung cấp đồ chơi sỉ TPHCM chất lượng ở khu
              vực Sài Gòn?… Đây là câu hỏi mà bất cứ ai đang có ý định kinh
              doanh đồ chơi đều thắc mắc. Vì vậy trong bài viết dưới đây chúng
              tôi sẽ gợi ý cho bạn top 5 các địa chỉ bán đồ chơi trẻ em sỉ và lẻ
              tại TPHCM với giá thành phải chăng và chất lượng cũng siêu đảm bảo
              nhé.
            </p>
            <div className="fw-bold">
              Wowexpress trang phân phối đồ chơi sỉ TPHCM uy tín và chất lượng
            </div>
            <div className="text-center">
              <img
                src={require("../../img/Dochoimaybay-taulua/TL-Thomas.jpg")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Wowexpress là cơ sở chuyên trang mua sắm đồ chơi trẻ em, chuyên
              cung cấp đồ chơi giá sỉ tại TPHCM lâu năm và uy tín với giá cả
              phải chăng nhất. Nơi đây đang là một sự lựa chọn cho nhiều đại lý
              cửa hàng và đơn vị kinh doanh sản phẩm đồ chơi trẻ em trong và
              ngoài thành phố. Với những mẫu mã vô cùng đa dạng và phong phú,
              đặc biệt chất lượng cũng vô cùng đảm bảo phù hợp với trẻ em, giúp
              các bé phát triển các kỹ năng và trí tuệ một cách toàn diện.
            </p>
            <p>Các sản phẩm đồ chơi được chúng tôi cung cấp luôn đảm bảo:</p>
            <ul className="m-4">
              <li>Góp phần mang niềm vui, tiếng cười tới mỗi gia đình.</li>
              <li>
                Kiến tạo nên những thế hệ trẻ em Việt Nam khỏe mạnh, năng động,
                sáng tạo.
              </li>
              <li>Được phân loại theo từng độ tuổi.</li>
              <li>Giúp trẻ thông minh và phát triển hơn.</li>
            </ul>
            <p>
              Quý khách hàng có thể: Mua hàng online qua website, mua hàng trực
              tiếp tại kho và mua sỉ về bán shop.
            </p>
            <div className="fw-bold">Thông tin liên hệ</div>
            <p>
              Địa chỉ: 308 quốc lộ 1A, Bình Hưng Hòa B, Quận Bình Tân, TP. Hồ
              Chí Minh
            </p>
            <p className="fw-bold" style={{ color: "rgb(255,92,0)" }}>
              Hotline: (+84) 921 474 666 hoặc (+84) 931 404 866
            </p>
            <div className="fw-bold">
              Đồ chơi chợ Lớn – Sỉ và lẻ đồ chơi trẻ em tại TPHCM
            </div>
            <div className="text-center">
              <img
                src={require("../../img/búp bê/bup-be-chan-dai-nho-bibos-linhanhkids1.jpg")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Được thành lập vào năm 2013. Đồ chơi sỉ TPHCM chợ lớn được khách
              hàng biết đến như là một nơi mua đồ chơi trẻ em giá sỉ và lẻ tại
              TPHCM. Với các mặt hàng đồ chơi trẻ em đa dạng theo từng lứa tuổi,
              sở thích, chất lượng,…
            </p>
            <p>
              Hiện tại đồ chơi chợ lớn đang là đại lý của các cơ sở buôn bán đồ
              chơi trẻ em tại Việt Nam như: Nhựa chợ lớn, Long Thùy Toys, Hoàng
              Thu Toys, Đồng Sanh,… Với phương châm <br /> “Uy tín – chất lượng
              – tận tình – chu đáo” Công ty cam kết sẽ cung cấp cho khách hàng
              những sản phẩm đồ chơi tốt nhất, với giá thành tận gốc và chất
              lượng nhất.
            </p>
            <div className="fw-bold">
              Đồ chơi chợ Lớn – Sỉ và lẻ đồ chơi trẻ em tại TPHCM
            </div>
            <div className="text-center">
              <img
                src={require("../../img/Dochoimaybay-taulua/VECTO-YD-218.png")}
                style={{ width: 300 }}
                height={400}
                alt=""
              />
            </div>
            <p>
              Alitaobao là cơ sở cung cấp cho khách hàng nền tảng đặt hàng trực
              tuyến từ Trung Quốc sau đó vận chuyển về Việt Nam. Thông qua
              Alitaobao, khách hàng dễ dàng tiếp cận với nguồn cung cấp hàng hóa
              lớn nhất thế giới, với đủ các chủng loại mặt hàng với mức giá bán
              buôn tại nơi sản xuất.
            </p>
            <p>
              Đối với mặt hàng đồ chơi trẻ em, Alitaobao đã phục vụ cho rất
              nhiều khách hàng. Bán buôn, bán sỉ, order, nhập hàng đồ chơi trẻ
              em giá sỉ trực tiếp từ Quảng Châu, Trung Quốc, mẫu mã đa dạng.
              Hàng hóa sẽ về sau 3 – 5 ngày và vận chuyển miễn phí tới địa chỉ
              của bạn.
            </p>
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
    </div>
  );
};

export default Chitiettintuc;
