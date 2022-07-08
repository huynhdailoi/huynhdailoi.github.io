import Trangchu from "./user/components/pages/Trangchu";
import Sanphamm from "./user/components/pages/Sanpham";
import Gioitinh from "./user/components/pages/Gioitinh";
import Dotuoi from "./user/components/pages/Dotuoi";
import Tintuc from "./user/components/pages/Tintuc";
import Lienhe from "./user/components/pages/Lienhe";
import Thanhtoan from "./user/components/pages/Thanhtoan";
import Chitietsanpham from "./user/components/pages/Chitietsanpham";
import Gioithieu from "./user/components/pages/Gioithieu";
import Chitiettintuc from "./user/components/pages/Chitiettintuc";

const routeJs = [
  { path: "website", component: <Trangchu /> },
  { path: "", component: <Trangchu /> },
  { path: "sanphamCH", component: <Sanphamm /> },
  { path: "gioitinh", component: <Gioitinh /> },
  { path: "dotuoi", component: <Dotuoi /> },
  { path: "tintuc", component: <Tintuc /> },
  { path: "lienhe", component: <Lienhe /> },
  { path: "thanhtoan", component: <Thanhtoan /> },
  { path: "chitietsanpham", component: <Chitietsanpham /> },
  { path: "gioithieu", component: <Gioithieu /> },
  { path: "chitiettintuc", component: <Chitiettintuc /> },
];

export default routeJs;
