import api from "./api";

const getAllPersonnals = () => {
  return api.get("/personnals").then((res) => res.data);
};

const getOnePersonnal = (id) => {
  return api.get(`/personnals/${id}`).then((res) => res.data);
};

const deletePersonnal = (id) => {
  return api.delete(`/personnals/${id}`).then((res) => res.data);
};

const updatePersonnal = (personnal, id) => {
  console.log(`/personnals/${id}`);
  console.log("Personnal: ", personnal);
  return api.put(`/personnals/${id}`, personnal).then((res) => res.data);
};

const addPersonnal = (data) => {
  return api.post(`/personnals`, data).then((res) => res.data);
};

const instructorService = {
  getAllPersonnals,
  getOnePersonnal,
  deletePersonnal,
  updatePersonnal,
  addPersonnal,
};

export default instructorService;
