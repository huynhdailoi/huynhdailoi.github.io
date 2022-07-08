import React from "react";
import { Link } from "react-router-dom";

const SanphamSlGd = () => {
  return (
    <div className="col bg-white">
      <div className="container p-3">
        <div className="row">
          <div className="col h2">Thống kê theo</div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs m-3">
              <li className="nav-item">
                <Link className="nav-link h4 text-dark" to="/TKnhanvien">
                  Nhân viên
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-dark"
                  aria-current="page"
                  to="/TKkhachhang"
                >
                  Khách hàng-NCC
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h4 text-dark" to="/TKhoadonnhap">
                  Hóa đơn
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h4 active text-warning"
                  to="/TKsanpham"
                >
                  Sản phẩm
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link h4 text-dark"
                  aria-current="page"
                  to="/xuatnhapton"
                >
                  Xuất nhập tồn
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-auto float-end m-3" />
        </div>
        <div className="row">
          <div className="col-4">
            <a
              className="nav-link dropdown-toggle btn border boder-2 text-start text-dark "
              href="/#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mối quan tâm
            </a>
            <ul
              className="dropdown-menu bg-light"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link to="/soluongsanphamgiamdan" className="dropdown-item">
                  Số lượng sản phẩm đã bán giảm dần
                </Link>
              </li>
              <li>
                <Link to="/khachhang" className="dropdown-item">
                  Số lượng sản phẩm đã bán tăng dần
                </Link>
              </li>
              <li>
                <Link to="/khachhang" className="dropdown-item">
                  Doanh thu sản phẩm đã bán giảm dần
                </Link>
              </li>
              <li>
                <Link to="/khachhang" className="dropdown-item">
                  Doanh thu sản phẩm đã bán giảm dần
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="input-group">
              <span className="input-group-text bg-danger text-white">
                Từ ngày
              </span>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="input-group">
              <span className="input-group-text bg-danger text-white">
                Đến ngày
              </span>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <table className="table table-hover table-striped">
            <thead>
              <tr className="row">
                <th className="col">ID</th>
                <th className="col">Tên SP</th>
                <th className="col text-end">Đơn giá(VNĐ)</th>
                <th className="col text-end">Độ tuổi</th>
                <th className="col text-end">SL tồn kho</th>
                <th className="col text-end">SL đã bán</th>
                <th className="col text-end">Nhà cung cấp</th>
                <th className="col text-end">Doanh thu(VNĐ)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <th className="col">3</th>
                <td className="col">Xe chở cát</td>
                <td className="col text-end">318.000</td>
                <td className="col text-end">3-5</td>
                <td className="col text-end">210</td>
                <td className="col text-end">50</td>
                <td className="col text-end">Tấn Trường</td>
                <td className="col text-end">15.900.000</td>
              </tr>
              <tr className="row">
                <th className="col">5</th>
                <td className="col">Xe moto</td>
                <td className="col text-end">500.000</td>
                <td className="col text-end">6-11</td>
                <td className="col text-end">50</td>
                <td className="col text-end">30</td>
                <td className="col text-end">Công Thành</td>
                <td className="col text-end">15.000.000</td>
              </tr>
              <tr className="row">
                <th clas="" className="col">
                  1
                </th>
                <td className="col">Xe điều kiển BMW</td>
                <td className="col text-end">420.000</td>
                <td className="col text-end">6-11</td>
                <td className="col text-end">66</td>
                <td className="col text-end">20</td>
                <td className="col text-end">Công ty ABC</td>
                <td className="col text-end">24.000.000</td>
              </tr>
              <tr className="row">
                <th className="col">2</th>
                <td className="col">Robot</td>
                <td className="col text-end">1.500.000</td>
                <td className="col text-end">3-5</td>
                <td className="col text-end">70</td>
                <td className="col text-end">18</td>
                <td className="col text-end">Công ty ABC</td>
                <td className="col text-end">19.000.000</td>
              </tr>

              <tr className="row">
                <th className="col">4</th>
                <td className="col">MBay điều khiển</td>
                <td className="col text-end">1.000.000</td>
                <td className="col text-end">6-11</td>
                <td className="col text-end">90</td>
                <td className="col text-end">10</td>
                <td className="col text-end">Thương Vụ</td>
                <td className="col text-end">10.000.000</td>
              </tr>
            </tbody>
          </table>
          <div className="row bg-dark text-white pb-2 pt-2">
            <div className="col h5">Tổng</div>
            <div className="col text-end h5" />
            <div className="col text-end h5" />
            <div className="col text-end h5" />
            <div className="col text-end h5">386</div>
            <div className="col text-end h5">128</div>
            <div className="col text-end h5" />
            <div className="col text-end h5">69.000.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanphamSlGd;
