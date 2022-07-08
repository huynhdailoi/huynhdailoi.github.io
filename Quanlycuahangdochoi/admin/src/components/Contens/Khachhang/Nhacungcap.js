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
import supplierService from "../../../service/supplierService";
import Input from "./../../Input/Input";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Nhacungcap() {
  const [showModal, setShowModal] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const loadData = () => {
    supplierService.getAllSuppliers().then((res) => {
      setSuppliers(res);
    });
  };

  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      address: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      id: Yup.string(),
      name: Yup.string()
        .required("Vui lòng nhập tên vào !")
        .max(50, "Không quá 50 ký tự"),
      address: Yup.string()
        .required("Vui lòng nhập địa chỉ vào !")
        .max(100, "Không quá 100 ký tự"),
      phoneNumber: Yup.string()
        .required("Vui lòng nhập số điện thoại vào !")
        .max(50, "Không quá 50 ký tự."),
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
      supplierService.getOneSupplier(id).then((res) => {
        formik.setValues(res);
      });
    }
    handleModalShow();
  };

  const handleSubmitForm = (data) => {
    if (!data._id) {
      const { _id, ...others } = data;
      supplierService.addSupplier({ ...others }).then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Đã thêm nhà cung cấp mới",
          showConfirmButton: false,
          timer: 1000,
        });
        toast.success("Add successfully!");
        console.log("Add successfully!");
        loadData();
      });
    } else {
      supplierService.updateSupplier(data, data._id).then((res) => {
        if (res) {
          toast.success("Update successfully!");
          console.log("Update successfully");
          Swal.fire({
            title: `Cập nhật nhà cung cấp thành công`,
            icon: "success",
          });
          loadData();
        }
      });
    }
    handleModalClose();
  };

  const handleDelete = (id) => {
    supplierService.deleteSupplier(id).then((res) => {
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
                    <Link
                      className="nav-link h4 text-dark"
                      aria-current="page"
                      to="/khachhang"
                    >
                      Khách hàng
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link h4  active text-warning"
                      aria-current="page"
                      to="/nhacungcap"
                    >
                      Nhà cung cấp
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs="auto" className="m-3">
                <Button
                  onClick={(e) => handleShowModal(e, "")}
                  variant="primary"
                >
                  <i className="fas fa-plus"></i> Thêm nhà cung cấp
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
                  <th className="col">Địa chỉ</th>
                  <th className="col">Số điện thoại</th>
                  <th className="col text-center">Hành động</th>
                </tr>
              </thead>

              <tbody>
                {suppliers.map((supplier, index) => {
                  return (
                    <tr key={supplier._id} className="row g-0">
                      <th className="col">{index + 1}</th>
                      <td className="col">{supplier.name}</td>
                      <td className="col">{supplier.address}</td>
                      <td className="col">{supplier.phoneNumber}</td>
                      <td className="col text-center">
                        <a
                          href="/#"
                          onClick={(e) => handleShowModal(e, supplier._id)}
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
                              title: `Bạn có chắc muốn xóa ${supplier.name} chứ?`,
                              showDenyButton: true,
                              confirmButtonText: "Xóa",
                              denyButtonText: `Đóng`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(supplier._id);
                                Swal.fire({
                                  title: `Đã xóa ${supplier.name}`,
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
            {formik.values._id !== "" ? "Cập nhật" : "Thêm"} nhà cung cấp
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
            label="Địa chỉ*"
            frmField={formik.getFieldProps("address")}
            err={formik.touched.address && formik.errors.address}
            errMessage={formik.errors.address}
            inputSize="6"
            required
            placeholder="Nhập địa chỉ"
          />

          <Input
            frmField={formik.getFieldProps("phoneNumber")}
            err={formik.touched.phoneNumber && formik.errors.phoneNumber}
            errMessage={formik.errors.phoneNumber}
            label="Số điện thoại*"
            inputSize="6"
            required
            placeholder="Nhập số điện thoại"
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

export default Nhacungcap;
