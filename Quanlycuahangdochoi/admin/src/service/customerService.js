import api from "./api";

const getAllCustomers = () => {
  return api.get("/customers").then((res) => res.data);
};

const getOneCustomer = (id) => {
  return api.get(`/customers/${id}`).then((res) => res.data);
};

const deleteCustomer = (id) => {
  return api.delete(`/customers/${id}`).then((res) => res.data);
};

const updateCustomer = (customer, id) => {
  console.log(`/customers/${id}`);
  console.log("Customers: ", customer);
  return api.put(`/customers/${id}`, customer).then((res) => res.data);
};

const addCustomer = (data) => {
  return api.post(`/customers`, data).then((res) => res.data);
};

const customerService = {
  getAllCustomers,
  getOneCustomer,
  deleteCustomer,
  updateCustomer,
  addCustomer,
};

export default customerService;
