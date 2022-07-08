import {
  Col,
  Container,
  Row,
  Button,
  Table,
  Modal,
  Card,
} from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import productService from "../../../service/productService";
import Input from "./../../Input/Input";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Sanpham() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const loadData = () => {
    productService.getAllProducts().then((res) => {
      setProducts(res);
    });
  };

  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      price: "",
      amount: "",
      status: "Còn",
      age: "",
      supplier: "",
    },
    validationSchema: Yup.object({
      id: Yup.string(),
      name: Yup.string().required("Vui lòng nhập tên vào !"),
      price: Yup.string().required("Vui lòng nhập giá vào !"),
      amount: Yup.string().required("Vui lòng nhập số lượng vào !"),
      status: Yup.string(),
      age: Yup.string().required("Vui lòng nhập độ tuổi vào !"),
      supplier: Yup.string().required("Vui lòng nhập nhà cung cấp vào !"),
    }),
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  const handleShowModal = (e, id) => {
    e.preventDefault();
    if (!id) {
      formik.resetForm();
    } else {
      productService.getOneProduct(id).then((res) => {
        formik.setValues(res);
      });
    }
    handleModalShow();
  };

  const handleSubmitForm = (data) => {
    if (!data._id) {
      const { _id, ...others } = data;
      productService.addProduct({ ...others }).then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Đã thêm sản phẩm mới",
          showConfirmButton: false,
          timer: 1000,
        });
        toast.success("Add successfully!");
        console.log("Add successfully!");
        loadData();
      });
    } else {
      productService.updateProduct(data, data._id).then((res) => {
        if (res) {
          toast.success("Update successfully!");
          console.log("Update successfully");
          Swal.fire({
            title: `Cập nhật sản phẩm thành công`,
            icon: "success",
          });
          loadData();
        }
      });
    }
    handleModalClose();
  };

  const handleDelete = (id) => {
    productService.deleteProduct(id).then((res) => {
      toast.warning(res.message);
      console.log("Delete successfully");
      loadData();
    });
  };

  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <Row>
              <Col>
                <ul className="nav nav-tabs m-3">
                  <li className="nav-item">
                    <button
                      className="nav-link h4 active  text-warning"
                      aria-current="page"
                      href="/khachhang"
                    >
                      Sản phẩm
                    </button>
                  </li>
                </ul>
              </Col>
              <Col xs="auto" className="m-3">
                <Button
                  onClick={(e) => handleShowModal(e, "")}
                  variant="primary"
                >
                  <i className="fas fa-plus"></i> Thêm sản phẩm
                </Button>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body>
            <Table responsive hover className="table table-striped">
              <thead>
                <tr className="row g-0">
                  <th className="col">STT</th>
                  <th className="col">Tên</th>
                  <th className="col text-end">Đơn giá(VNĐ)</th>
                  <th className="col text-end">Số lượng</th>
                  <th className="col text-center">Trạng thái</th>
                  <th className="col text-center">Độ tuổi</th>
                  <th className="col">Nhà cung cấp</th>
                  <th className="col text-center">Hành động</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={product._id} className="row g-0">
                      <th className="col">{index + 1}</th>
                      <td className="col">{product.name}</td>
                      <td className="col text-end">{product.price}</td>
                      <td className="col text-end">{product.amount}</td>
                      <td className="col text-center">{product.status}</td>
                      <td className="col text-center">{product.age}</td>
                      <td className="col">{product.supplier}</td>
                      <td className="col text-center">
                        <a
                          href="/#"
                          onClick={(e) => handleShowModal(e, product._id)}
                          className="text-primary text-center me-3"
                        >
                          <i className="fas fa-edit"></i>
                        </a>
                        <a
                          href="/#"
                          className="text-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            Swal.fire({
                              title: `Bạn có chắc muốn xóa ${product.name} chứ?`,
                              showDenyButton: true,
                              confirmButtonText: "Xóa",
                              denyButtonText: `Đóng`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(product._id);
                                Swal.fire({
                                  title: `Đã xóa ${product.name}`,
                                  icon: "success",
                                });
                              }
                            });
                          }}
                        >
                          <i className="fas fa-trash-alt fs-5" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {formik.values._id !== "" ? "Cập nhật" : "Thêm"} sản phẩm
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Input
            label="Tên*"
            frmField={formik.getFieldProps("name")}
            err={formik.touched.name && formik.errors.name}
            errMessage={formik.errors.name}
            inputSize="6"
            required
            placeholder="Nhập tên"
          />
          <Input
            label="Đơn giá*"
            frmField={formik.getFieldProps("price")}
            err={formik.touched.price && formik.errors.price}
            errMessage={formik.errors.price}
            inputSize="6"
            required
            placeholder="Nhập đơn giá"
          />
          <Input
            label="Số lượng*"
            frmField={formik.getFieldProps("amount")}
            err={formik.touched.amount && formik.errors.amount}
            errMessage={formik.errors.amount}
            inputSize="6"
            required
            placeholder="Nhập số lượng"
          />

          <Input
            label="Trạng thái*"
            frmField={formik.getFieldProps("status")}
            err={formik.touched.status && formik.errors.status}
            errMessage={formik.errors.status}
            inputSize="6"
            required
            disabled
            value="Còn"
            placeholder="Nhập trạng thái"
          />
          <Input
            label="Độ tuổi*"
            frmField={formik.getFieldProps("age")}
            err={formik.touched.age && formik.errors.age}
            errMessage={formik.errors.age}
            inputSize="6"
            required
            placeholder="Nhập độ tuổi"
          />
          <Input
            label="Nhà cung cấp*"
            frmField={formik.getFieldProps("supplier")}
            err={formik.touched.supplier && formik.errors.supplier}
            errMessage={formik.errors.supplier}
            inputSize="6"
            required
            placeholder="Nhập nhà cung cấp"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Đóng
          </Button>
          <Button
            variant="primary"
            disabled={!formik.dirty || !formik.isValid}
            onClick={formik.handleSubmit}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sanpham;
