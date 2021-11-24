import axios from "axios";
import { ADD, DELETE, EDIT, GET, GET_ONE } from "../Types/productTypes";

export const addProduct =
  (categorie, name, poids, prix, quantité, image) => async (dispatch) => {
    try {
      const newProduct = { categorie, name, poids, prix, quantité, image };
      const res = await axios.post("/user/add", newProduct);
      dispatch({
        type: ADD,
        payload: res.data,
      });
    } catch (error) {
      alert("post error");
    }
  };

export const editProduct =
  (id, categorie, name, poids, prix, quantité, image) => async (dispatch) => {
    try {
      const editedProduct = { categorie, name, poids, prix, quantité, image };
      const res = await axios.put(`/user/update/${id}`, editedProduct);
      dispatch({
        type: EDIT,
        payload: res.data,
      });
    } catch (error) {
      alert("put error");
    }
  };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/delete/${id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
  }
};

export const getProduct = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/user/get/${id}`);
    dispatch({
      type: GET_ONE,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
  }
};
