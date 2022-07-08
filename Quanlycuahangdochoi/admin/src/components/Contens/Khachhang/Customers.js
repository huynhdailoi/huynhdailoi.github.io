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
import customerService from "../../../service/customerService";
import Input from "./../../Input/Input";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Customers() {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const loadData = () => {
    customerService.getAllCustomers().then((res) => {
      setCustomers(res);
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
      name: Yup.string().required("This is field required !"),
      address: Yup.string().required("This is field required !"),
      phoneNumber: Yup.string().required("This is field required !"),
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
      customerService.getOneCustomer(id).then((res) => {
        formik.setValues(res);
      });
    }
    handleModalShow();
  };

  const handleSubmitForm = (data) => {
    console.log("Data id: ", data._id);
    if (!data._id) {
      const { _id, ...others } = data;
      console.log("data add: ", data);
      customerService.addCustomer({ ...others }).then((res) => {
        console.log("add success");
        loadData();
      });
    } else {
      customerService.updateCustomer(data, data._id).then((res) => {
        if (res) {
          toast.success("Update successfully!");
          console.log("Update successfully");
          loadData();
        }
      });
    }
    handleModalClose();
  };

  const handleDelete = (id) => {
    customerService.deleteCustomer(id).then((res) => {
      toast.warning(res.message);
      loadData();
      console.log("Delete successfully");
    });
  };

  return (
    <>
      <Container>
        <Card className="mt-5 bt-5px border-primary">
          <Card.Header>
            <Row>
              <Col>
                <h3 className="fw-normal">
                  Customer <small className="text-muted">list</small>
                </h3>
              </Col>
              <Col xs="auto">
                <Button
                  onClick={(e) => handleShowModal(e, "")}
                  variant="primary"
                >
                  <i className="fas fa-plus"></i> Add
                </Button>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body>
            <Table responsive bordered hover className="border-primary">
              <thead className="table-primary border-primary">
                <tr>
                  <th style={{ width: "50px" }} className="text-center">
                    #
                  </th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th style={{ width: "80px" }} className="text-center"></th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => {
                  return (
                    <tr key={customer._id}>
                      <th className="text-center">{index + 1}</th>
                      <td>{customer.name}</td>
                      <td>{customer.address}</td>
                      <td>{customer.phoneNumber}</td>
                      <td className="text-center">
                        <a
                          href="/#"
                          onClick={(e) => handleShowModal(e, customer._id)}
                          className="text-primary text-center me-sm-2"
                        >
                          <i className="fas fa-edit"></i>
                        </a>
                        <a
                          href="/#"
                          className="text-danger me-2"
                          onClick={function () {
                            Swal.fire({
                              title: `Bạn có chắc muốn xóa ${customer.name} chứ?`,
                              showDenyButton: true,
                              confirmButtonText: "Xóa",
                              denyButtonText: `Đóng`,
                            }).then((result) => {
                              if (result.isConfirmed) {
                                handleDelete(customer._id);
                                Swal.fire({
                                  title: `Đã xóa ${customer.name}`,
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
            {formik.values._id !== "" ? "Update" : "New"} Customer
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Input
            label="Name"
            frmField={formik.getFieldProps("name")}
            err={formik.touched.name && formik.errors.name}
            errMessage={formik.errors.name}
            inputSize="6"
            required
            placeholder="Customer name"
          />
          <Input
            label="Address"
            frmField={formik.getFieldProps("address")}
            err={formik.touched.address && formik.errors.address}
            errMessage={formik.errors.address}
            inputSize="6"
            required
            placeholder="Customer address"
          />

          <Input
            frmField={formik.getFieldProps("phoneNumber")}
            err={formik.touched.phoneNumber && formik.errors.phoneNumber}
            errMessage={formik.errors.phoneNumber}
            label="phoneNumber"
            inputSize="6"
            required
            placeholder="Phone number"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!formik.dirty || !formik.isValid}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Customers;
