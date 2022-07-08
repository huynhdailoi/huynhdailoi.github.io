import api from "./api";

const getAllAuth = () => {
  return api.get("/auth").then((res) => res.data);
};

const getOneCustomer = (id) => {
  return api.get(`/auth/${id}`).then((res) => res.data);
};

const deleteCustomer = (id) => {
  return api.delete(`/auth/${id}`).then((res) => res.data);
};

const updateCustomer = (customer, id) => {
  console.log(`/auth/${id}`);
  console.log("Auth: ", customer);
  return api.put(`/auth/${id}`, customer).then((res) => res.data);
};

const addCustomer = (data) => {
  return api.post(`/auth`, data).then((res) => res.data);
};

const authervice = {
  getAllAuth,
  getOneCustomer,
  deleteCustomer,
  updateCustomer,
  addCustomer,
};

export default authervice;
