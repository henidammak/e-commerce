import axios from "axios";
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCSS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCSS,
} from "../Types/types";

export const registerUser = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER,
  });
  try {
    const res = await axios.post("/user/register", newUser);
    console.log(res);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: REGISTER_SUCCSS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const logUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN,
  });
  try {
    const res = await axios.post("/user/login", user);
    console.log(res);
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: LOGIN_SUCCSS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
