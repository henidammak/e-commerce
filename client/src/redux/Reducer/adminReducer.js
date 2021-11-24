import {
  LOGINADMIN,
  LOGINADMIN_FAIL,
  LOGINADMIN_SUCCSS,
  REGISTERADMIN,
  REGISTERADMIN_FAIL,
  REGISTERADMIN_SUCCSS,
} from "../Types/adminTypes";

const initialState = {
  admins: null,
  errors: null,
  loading: false,
  token1: null,
  // admin:null
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTERADMIN:
    case LOGINADMIN:
      return { ...state, loading: true };
    case REGISTERADMIN_SUCCSS:
      return { ...state, loading: false, admins: payload };
    case REGISTERADMIN_FAIL:
    case LOGINADMIN_FAIL:
      return { ...state, loading: false, errors: payload };
    case LOGINADMIN_SUCCSS:
      return { ...state, loading: false, token1: payload };

    default:
      return state;
  }
};
export default adminReducer;
