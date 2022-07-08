import React from "react";
import { Link } from "react-router-dom";

const TKNhanvien = () => {
  let option_id = [0, 1, 2];
  let options = [
    { name: "Mối quan tâm" },
    { name: "Top 5 nhân viên bán nhiều nhất" },
    { name: "Nhân viên có doanh thu cao" },
  ];
  let selectedOptionId = 0;
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
                <Link
                  className="nav-link h4 active text-warning"
                  to="/TKnhanvien"
                >
                  Nhân viên
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h4 text-dark" to="/TKkhachhang">
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
                  className="nav-link h4 text-dark"
                  aria-current="page"
                  to="/Tksanpham"
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
              {/* <li class="nav-item">
              <a class="nav-link h4 text-dark" aria-current="page" href="thongkedoanhthu.html">Doanh thu</a>
            </li> */}
            </ul>
          </div>
          <div className="col-auto float-end m-3" />
        </div>
        <div className="row">
          <div className="col-4">
            <select className="form-select" defaultValue={selectedOptionId}>
              {option_id.map((id) => (
                <option key={id} value={id}>
                  {options[id].name}
                </option>
              ))}
            </select>
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
        <div className="div p-3">
          <table className="table table-hover table-striped">
            <thead>
              <tr className="row">
                <th className="col">ID</th>
                <th className="col">Tên</th>
                <th className="col">Địa Chỉ</th>
                <th className="col">Số Điện Thoại</th>
                <th className="col text-end">Sl SP bán</th>
                <th className="col text-end">Doanh thu</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <th className="col">1</th>
                <td className="col">Hoàng Khương</td>
                <td className="col">Tp Hồ Chí Minh</td>
                <td className="col">0979115345</td>
                <td className="col text-end"> 12</td>
                <td className="col text-end">12.200.000</td>
              </tr>
              <tr className="row">
                <th className="col">2</th>
                <td className="col">Đại Lợi</td>
                <td className="col">Đồng Nai</td>
                <td className="col">0933140284</td>
                <td className="col text-end"> 12</td>
                <td className="col text-end">11.100.000</td>
              </tr>
              <tr className="row">
                <th className="col">3</th>
                <td className="col">Trường An</td>
                <td className="col">Bình Dương</td>
                <td className="col">0986306331</td>
                <td className="col text-end"> 16</td>
                <td className="col text-end">27.000.000</td>
              </tr>
              <tr className="row">
                <th className="col">4</th>
                <td className="col">Đức Duyên</td>
                <td className="col">Đà Nẵng</td>
                <td className="col">0903122556</td>
                <td className="col text-end"> 5</td>
                <td className="col text-end">15.020.000</td>
              </tr>
              <tr className="row">
                <th className="col">5</th>
                <td className="col">Yến Lê</td>
                <td className="col">Hà Nội</td>
                <td className="col">0983118813</td>
                <td className="col text-end"> 19</td>
                <td className="col text-end">20.000.000</td>
              </tr>
            </tbody>
          </table>
          <div className="row bg-dark text-white pb-2 pt-2">
            <div className="col-8 text-start h5">Tổng</div>
            <div className="col-2 text-end h5">59</div>
            <div className="col text-end h5">91.200.000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TKNhanvien;
