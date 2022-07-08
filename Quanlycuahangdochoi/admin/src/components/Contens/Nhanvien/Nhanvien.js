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
import personnalService from "../../../service/personnalService";
import Input from "./../../Input/Input";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Nhanvien() {
  const [showModal, setShowModal] = useState(false);
  const [personnals, setPersonnals] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const loadData = () => {
    personnalService.getAllPersonnals().then((res) => {
      setPersonnals(res);
    });
  };

  const formik = useFormik({
    initialValues: {
      _id: "",
      name: "",
      address: "",
      phoneNumber: "",
      position: "",
    },
    validationSchema: Yup.object({
      id: Yup.string(),
      name: Yup.string()
        .required("Vui lòng nhập địa chỉ vào !")
        .max(50, "Không quá 50 ký tự"),
      address: Yup.string()
        .required("Vui lòng nhập địa chỉ vào !")
        .max(100, "Không quá 100 ký tự"),
      phoneNumber: Yup.string()
        .required("Vui lòng nhập dữ liệu vào !")
        .max(50, "Số điện thoại cần 50 ký tự."),
      position: Yup.string().required("Vui lòng nhập chức vụ vào !"),
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
      personnalService.getOnePersonnal(id).then((res) => {
        formik.setValues(res);
      });
    }
    handleModalShow();
  };

  const handleSubmitForm = (data) => {
    if (!data._id) {
      const { _id, ...others } = data;
      personnalService.addPersonnal({ ...others }).then((res) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Đã thêm nhân viên mới",
          showConfirmButton: false,
          timer: 1000,
        });
        toast.success("Add successfully!");
        console.log("Add successfully!");
        loadData();
      });
    } else {
      personnalService.updatePersonnal(data, data._id).then((res) => {
        if (res) {
          toast.success("Update successfully!");
          console.log("Update successfully");
          Swal.fire({
            title: `Cập nhật nhân viên thành công`,
            icon: "success",
          });
          loadData();
        }
      });
    }
    handleModalClose();
  };

  const handleDelete = (id) => {
    personnalService.deletePersonnal(id).then((res) => {
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
                    <a
                      className="nav-link h4 active  text-warning"
                      aria-current="page"
                      href="/khachhang"
                    >
                      Nhân viên
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs="auto" className="m-3">
                <Button
                  onClick={(e) => handleShowModal(e, "")}
                  variant="primary"
                >
                  <i className="fas fa-plus"></i> Thêm nhân viên
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
                  <th className="col">chức vụ</th>
                  <th className="col text-center">Hành động</th>
                </tr>
              </thead>

              <tbody>
                {personnals.map((personnal, index) => {
                  return (
                    <tr key={personnal._id} className="row g-0">
                      <th className="col">{index + 1}</th>
                      <td className="col">{personnal.name}</td>
                      <td className="col">{personnal.address}</td>
                      <td className="col">{personnal.phoneNumber}</td>
                      <td className="col">{personnal.position}</td>
                      <td className="col text-center">
                        <a
                          href="/#"
                          onClick={(e) => handleShowModal(e, personnal._id)}
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
                              title: `Bạn có chắc muốn xóa ${personnal.name} chứ?`,
                              showDenyButton: true,
                              confirmButtonText: "Xóa",
                              denyButtonText: `Đóng`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(personnal._id);
                                Swal.fire({
                                  title: `Đã xóa ${personnal.name}`,
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
            {formik.values._id !== "" ? "Cập nhật" : "Thêm"} nhân viên
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
            label="Số điện thoại*"
            frmField={formik.getFieldProps("phoneNumber")}
            err={formik.touched.phoneNumber && formik.errors.phoneNumber}
            errMessage={formik.errors.phoneNumber}
            inputSize="6"
            required
            placeholder="Nhập số điện thoại"
          />

          <Input
            frmField={formik.getFieldProps("position")}
            err={formik.touched.position && formik.errors.position}
            errMessage={formik.errors.position}
            label="Chức vụ*"
            inputSize="6"
            required
            placeholder="Nhập chức vụ"
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

export default Nhanvien;
