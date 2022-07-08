import api from "./api";

const getAllProducts = () => {
  return api.get("/products").then((res) => res.data);
};

const getOneProduct = (id) => {
  return api.get(`/products/${id}`).then((res) => res.data);
};

const deleteProduct = (id) => {
  return api.delete(`/products/${id}`).then((res) => res.data);
};

const updateProduct = (product, id) => {
  console.log(`/products/${id}`);
  console.log("Product: ", product);
  return api.put(`/products/${id}`, product).then((res) => res.data);
};

const addProduct = (data) => {
  return api.post(`/products`, data).then((res) => res.data);
};

const instructorService = {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  updateProduct,
  addProduct,
};

export default instructorService;
