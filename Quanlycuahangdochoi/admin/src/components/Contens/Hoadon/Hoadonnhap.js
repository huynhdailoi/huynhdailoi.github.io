import React from "react";

const Hoadonnhap = () => {
  return (
    <div>
      <>
        <div className="row p-2 g-0">
          <div className="col">
            <span className="h4 text-warning">Hóa đơn nhập</span>
          </div>
        </div>
        <div className="row g-0 p-2 bg-info" style={{ borderRadius: 10 }}>
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-info bg-info">
              <form className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Sản phẩm"
                  aria-label="Search"
                />
                <button className="btn btn-success ms-2" type="submit">
                  Tìm
                </button>
              </form>
            </nav>
          </div>
        </div>
        <div className="row g-0">
          <div className="col p-2">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="/#">
                    Phiếu 1
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row p-2 g-0">
          <div className="col-8">
            <table className="table table-white table-striped">
              <thead>
                <tr className="row">
                  <th className="col-1">#</th>
                  <th className="col">Tên</th>
                  <th className="col">Số lượng</th>
                  <th className="col">Đơn giá</th>
                  <th className="col">Tổng tiền</th>
                  <th className="col text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr className="row">
                  <th className="col-1">1</th>
                  <td className="col"> Xe điều khiển</td>
                  <td className="col">
                    <input
                      aria-label="quantity"
                      className="input-qty form-control"
                      max={100}
                      min={1}
                      name=""
                      type="number"
                      defaultValue={1}
                      style={{ width: 90 }}
                    />
                  </td>
                  <td className="col">120.000</td>
                  <td className="col">120.000</td>
                  <td className="text-center col">
                    <button className="btn btn-outline-danger">
                      {" "}
                      <i className="fas fa-trash-alt fs-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4 ps-3">
            <div className="card p-3">
              <div className="row pb-3">
                <div className="input-group">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm khách hàng"
                    />
                  </div>
                  <span className="m-2">24/05/2022</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">Tạm tính</div>
                <div className="col">120.000</div>
              </div>
              <div className="row mb-3">
                <div className="col">Phí vận chuyển</div>
                <div className="col">0.000</div>
              </div>
              <div className="row mb-3">
                <div className="col">Tiền mình trả</div>
                <div className="col-6">
                  <input
                    className="form-control  border border-2 border-top-0 border-end-0 border-start-0"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">Tiền thừa trả mình</div>
                <div className="col">__________________</div>
              </div>
              <div className="row mb-3">
                <div className="col">Tổng tiền</div>
                <div className="col">
                  <span className="text-danger h3">120.000</span>
                </div>
              </div>
              <button className="btn btn-danger">Thanh toán</button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hoadonnhap;
