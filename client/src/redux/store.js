import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Reducer/root/rootReducer'


const devtool=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore( rootReducer,compose(applyMiddleware(thunk),devtool))
export default store