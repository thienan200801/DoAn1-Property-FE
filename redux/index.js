import { applyMiddleware, combineReducers, createStore } from "redux";
import createMiddlewareSaga from "redux-saga";
import MenuReducer from "./reducer/MenuReducer";
import rootSaga from "./sagas/rootSaga";

const middlewareSaga = createMiddlewareSaga();
const rootReducer = combineReducers({
  MenuReducer,
});

const store = createStore(rootReducer, applyMiddleware(middlewareSaga));

middlewareSaga.run(rootSaga);

export { store };
