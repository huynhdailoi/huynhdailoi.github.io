import api from "./api";

const getAllSuppliers = () => {
  return api.get("/suppliers").then((res) => res.data);
};

const getOneSupplier = (id) => {
  return api.get(`/suppliers/${id}`).then((res) => res.data);
};

const deleteSupplier = (id) => {
  return api.delete(`/suppliers/${id}`).then((res) => res.data);
};

const updateSupplier = (supplier, id) => {
  console.log(`/suppliers/${id}`);
  console.log("Suppliers: ", supplier);
  return api.put(`/suppliers/${id}`, supplier).then((res) => res.data);
};

const addSupplier = (data) => {
  return api.post(`/suppliers`, data).then((res) => res.data);
};

const instructorService = {
  getAllSuppliers,
  getOneSupplier,
  deleteSupplier,
  updateSupplier,
  addSupplier,
};

export default instructorService;
