import Khachhang from "./components/Contens/Khachhang/Khachhang";
import Nhacungcap from "./components/Contens/Khachhang/Nhacungcap";
import Hoadonnhap from "./components/Contens/Hoadon/Hoadonnhap";
import Hoadonxuat from "./components/Contens/Hoadon/Hoadonxuat";
import Nhanvien from "./components/Contens/Nhanvien/Nhanvien";
import Sanpham from "./components/Contens/Sanpham/Sanpham";
import TKkhachhang from "./components/Contens/Thongke/Khachhang/Khachhang";
import TKNhanvien from "./components/Contens/Thongke/Nhanvien/Nhanvien";
import TKHoadonnhap from "./components/Contens/Thongke/Hoadon/Hoadonnhap";
import TKhoadonxuat from "./components/Contens/Thongke/Hoadon/hoadonxuat";
import TKsanpham from "./components/Contens/Thongke/Sanpham/Sanpham";
import Xuatnhapton from "./components/Contens/Thongke/Xuatnhapton.js/Xuatnhapton";
import SanphamSlGd from "./components/Contens/Thongke/Sanpham/SanphamSlGd";

const routeJs = [
  { path: "home", component: <Khachhang /> },
  { path: "khachhang", component: <Khachhang /> },
  { path: "nhacungcap", component: <Nhacungcap /> },
  { path: "hoadonnhap", component: <Hoadonnhap /> },
  { path: "hoadonxuat", component: <Hoadonxuat /> },
  { path: "nhanvien", component: <Nhanvien /> },
  { path: "sanpham", component: <Sanpham /> },
  { path: "TKKhachhang", component: <TKkhachhang /> },
  { path: "TKNhanvien", component: <TKNhanvien /> },
  { path: "TKSanpham", component: <TKsanpham /> },
  { path: "TKHoadonnhap", component: <TKHoadonnhap /> },
  { path: "TKHoadonxuat", component: <TKhoadonxuat /> },
  { path: "xuatnhapton", component: <Xuatnhapton /> },
  { path: "soluongsanphamgiamdan", component: <SanphamSlGd /> },
];

export default routeJs;
