import axios from "axios";
import {
  LOGINADMIN,
  LOGINADMIN_FAIL,
  LOGINADMIN_SUCCSS,
  REGISTERADMIN,
  REGISTERADMIN_FAIL,
  REGISTERADMIN_SUCCSS,
} from "../Types/adminTypes";

export const registerAdmin = (newAdmin) => async (dispatch) => {
  dispatch({
    type: REGISTERADMIN,
  });
  try {
    const res = await axios.post("/user/registerAdmin", newAdmin);
    console.log(res);
    localStorage.setItem("token1", res.data.token1);
    dispatch({
      type: REGISTERADMIN_SUCCSS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTERADMIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const logAdmin = (admin) => async (dispatch) => {
  dispatch({
    type: LOGINADMIN,
  });
  try {
    const res = await axios.post("/user/loginAdmin", admin);
    console.log(res);
    localStorage.setItem("token1", res.data.token1);
    dispatch({
      type: LOGINADMIN_SUCCSS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGINADMIN_FAIL,
      payload: error.response.data,
    });
  }
};
