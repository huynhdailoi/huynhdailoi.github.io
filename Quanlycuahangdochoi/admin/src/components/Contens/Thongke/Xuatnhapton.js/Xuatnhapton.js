import React from "react";
import { Link } from "react-router-dom";

const Xuatnhapton = () => {
  let option_id = [0, 1, 2];
  let options = [
    { name: "Mối quan tâm" },
    { name: "Theo tên sản phẩm" },
    { name: "Theo giá bán" },
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
                <Link className="nav-link h4  text-dark" to="/TKnhanvien">
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
                  className="nav-link h4 active text-warning"
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
                <th className="col-1">#</th>
                <th className="col">Tên sản phẩm</th>
                <th className="col">Giá bán</th>
                <th className="col">Nhà cung cấp</th>
                <th className="col text-center">Tồn đầu</th>
                <th className="col text-center">Nhâp</th>
                <th className="col text-center">Xuất</th>
                <th className="col text-center">Tồn cuối</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <th className="col-1">1</th>
                <td className="col">Xe điều khiển</td>
                <td className="col">200.000</td>
                <td className="col">VietNamPlay</td>
                <td className="col text-center">10</td>
                <td className="col text-center">20</td>
                <td className="col text-center">25</td>
                <td className="col text-center">5</td>
              </tr>
              <tr className="row">
                <th className="col-1">2</th>
                <td className="col">Búp bê</td>
                <td className="col">250.000</td>
                <td className="col">TrungQuocT</td>
                <td className="col text-center">11</td>
                <td className="col text-center">10</td>
                <td className="col text-center">15</td>
                <td className="col text-center">6</td>
              </tr>
              <tr className="row">
                <th className="col-1">3</th>
                <td className="col">MBay điều khiển</td>
                <td className="col">270.000</td>
                <td className="col">CanadaS</td>
                <td className="col text-center">12</td>
                <td className="col text-center">20</td>
                <td className="col text-center">30</td>
                <td className="col text-center">2</td>
              </tr>
              <tr className="row">
                <th className="col-1">4</th>
                <td className="col">Bộ xếp hình</td>
                <td className="col">220.000</td>
                <td className="col">VietNamPlay</td>
                <td className="col text-center">10</td>
                <td className="col text-center">10</td>
                <td className="col text-center">15</td>
                <td className="col text-center">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Xuatnhapton;
