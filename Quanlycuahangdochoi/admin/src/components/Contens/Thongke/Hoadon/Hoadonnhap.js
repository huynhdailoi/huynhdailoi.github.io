import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TKHoadonnhap = () => {
  let option_id = [0, 1, 2, 3];
  let options = [
    { name: "Mối quan tâm" },
    { name: "Theo ngày gần nhất" },
    { name: "Hóa đơn có tổng tiền cao" },
    { name: "Nhân viên ghi nhiều hóa đơn" },
  ];
  let selectedOptionId = 0;

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
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
              <Link className="nav-link h4 text-dark" to="/TKkhachhang">
                Khách hàng-NCC
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link h4 active text-warning"
                aria-current="page"
                to="/TKhoadonnhap"
              >
                Hóa đơn
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link h4 text-dark"
                aria-current="page"
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
            {/* <li class="nav-item">
            <a class="nav-link h4 text-dark" aria-current="page" href="thongkedoanhthu.html">Doanh thu</a>
          </li> */}
          </ul>
        </div>
        <div className="col-auto float-end m-3" />
      </div>
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs m-3">
              <li className="nav-item">
                <Link
                  className="nav-link h4  text-warning active"
                  to="/thongkehoadonnhap.html"
                >
                  Hóa đơn nhập
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h4 text-dark" to="/TKhoadonxuat">
                  Hóa đơn xuất
                </Link>
              </li>
            </ul>
          </div>
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
                <th className="col">Nhân viên</th>
                <th className="col">Khách hàng</th>
                <th className="col text-center">Giờ phút</th>
                <th className="col">Ngày hoá đơn</th>
                <th className="col text-end">Tổng tiền(VNĐ)</th>
                <th className="col-1 text-center">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <th className="col">hd001</th>
                <td className="col">Nguyễn Văn Chính</td>
                <td className="col">Phí Thị Mai Dương</td>
                <td className="col text-center">8:30</td>
                <td className="col">20/10/2021</td>
                <td className="col text-end">4.500.000</td>
                <td className="col-1 text-center">
                  <a
                    href="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleModalShow(e, "");
                    }}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                </td>
              </tr>
              <tr className="row">
                <th className="col">hd0011</th>
                <td className="col">Phạm Anh Dũng</td>
                <td className="col">Phan Thanh Dũng</td>
                <td className="col text-center">11:20</td>
                <td className="col">21/11/2021</td>
                <td className="col text-end">5.400.000</td>
                <td className="col-1 text-center">
                  <i className="fa-solid fa-eye"></i>
                </td>
              </tr>
              <tr className="row">
                <th className="col">hd002</th>
                <td className="col">Nguyễn Văn Chính</td>
                <td className="col">Cao Thị Lan</td>
                <td className="col text-center">12:40</td>
                <td className="col">10/12/2021</td>
                <td className="col text-end">4.500.000</td>
                <td className="col-1 text-center">
                  <i className="fa-solid fa-eye"></i>
                </td>
              </tr>
              <tr className="row">
                <th className="col">hd003</th>
                <td className="col">Nguyễn Văn Chính</td>
                <td className="col">Chu Thị Hà</td>
                <td className="col text-center">19:30</td>
                <td className="col">20/08/2021</td>
                <td className="col text-end">1.800.000</td>
                <td className="col-1 text-center">
                  <i className="fa-solid fa-eye"></i>
                </td>
              </tr>
              <tr className="row">
                <th className="col">hd004</th>
                <td className="col">Phạm Anh Dũng</td>
                <td className="col">Vũ Thanh Huyên</td>
                <td className="col text-center">10:20</td>
                <td className="col">10/10/2021</td>
                <td className="col text-end">3.000.000</td>
                <td className="col-1 text-center">
                  <i className="fa-solid fa-eye"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row bg-dark text-white pb-2 pt-2">
            <div className="col-9 text-start h5">Tổng</div>
            <div className="col text-end h5 me-5 pe-5">17.100.000</div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hóa đơn chi tiết hd001</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table responsive hover className="table table-striped">
            <thead>
              <tr className="row g-0">
                <th className="col-1">STT</th>
                <th className="col-4">Tên sản phẩm</th>
                <th className="col text-center">Số lượng</th>
                <th className="col text-end">Đơn giá(VNĐ)</th>
                <th className="col text-end">Thành tiền(VNĐ)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row g-0">
                <td className="col-1">1</td>
                <th className="col-4">Xe điều khiển BMW</th>
                <td className="col text-center">1</td>
                <td className="col text-end">500.000</td>
                <td className="col text-end">500.000</td>
              </tr>
              <tr className="row g-0">
                <td className="col-1">2</td>
                <th className="col-4">MBay điều khiển từ xa</th>
                <td className="col text-center">1</td>
                <td className="col text-end">1.000.000</td>
                <td className="col text-end">1.000.000</td>
              </tr>
              <tr className="row g-0">
                <td className="col-1">3</td>
                <th className="col-4">Robot</th>
                <td className="col text-center">2</td>
                <td className="col text-end">1.500.000</td>
                <td className="col text-end">3.000.000</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TKHoadonnhap;
