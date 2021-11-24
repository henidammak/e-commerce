import { combineReducers } from "redux";
import adminReducer from "../adminReducer";
import { productReducer, productReducerDetail } from "../productReducer";
import reducer from "../reducer";

const rootReducer = combineReducers({
  user: reducer,
  product: productReducer,
  productDetails: productReducerDetail,
  admin: adminReducer,
});

export default rootReducer;
