import { ADD, DELETE, EDIT, GET, GET_ONE } from "../Types/productTypes";

const initialestate = {
  products: [],
  loading: true,
};
export const productReducer = (state = initialestate, { type, payload }) => {
  switch (type) {
    case GET:
      return { ...state, loading: false, products: payload };

    case ADD:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case EDIT:
      return {
        ...state,
        loading: false,
        products: state.products.map((el) =>
          el._id === payload._id ? { ...el, ...payload } : el
        ),
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        products: state.products.filter((el) => el._id !== payload._id),
      };
    default:
      return state;
  }
};

export const productReducerDetail = (
  state = initialestate,
  { type, payload }
) => {
  switch (type) {
    case GET_ONE:
      return { ...state, loading: false, products: payload };
    default:
      return state;
  }
};
