import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ height: "100vh" }}>
      <div className="row g-0">
        <div className="col ">
          <ul className="list-unstyled h4">
            <li className=" p-3">
              {" "}
              <span
                className="navbar-brand text-danger"
                style={{ fontSize: 24, fontWeight: "bold" }}
              >
                TOY STORY
              </span>
            </li>
            <li className="p-4">
              <Link to="/home">Tổng quan </Link>
            </li>
            <li className="p-4">
              <Link to="/khachhang">Khách hàng - NCC </Link>
            </li>
            <li className="p-4">
              <Link to="/hoadonnhap">Hóa đơn nhập </Link>
            </li>
            <li className="p-4">
              <Link to="/hoadonxuat">Hóa đơn xuất </Link>
            </li>
            <li className="p-4">
              <Link to="/nhanvien">Nhân viên </Link>
            </li>
            <li className="p-4">
              <Link to="/sanpham">Sản phẩm </Link>
            </li>
            <li className="p-4">
              <Link to="/TKnhanvien">Thống kê </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
