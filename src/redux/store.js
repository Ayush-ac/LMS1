import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import userReducer from './slice/userSlice';
import authReducer from './authSlice';
import combineDataReducer from './slice/combineDataSlice';
import basicDataReducer from './slice/basicDataSlice';
import causesDataReducer from './slice/causesDataSlice';
import witnessDataReducer from './slice/witnessDataSlice';
import policeDataReducer from './slice/policeDataSlice';
import insuranceDataReducer from './slice/insuranceDataSlice';
import inspectionDataReducer from './slice/inspectionDataSlice';
import furtherDataReducer from './slice/furtherDataSlice';

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['auth', 'basicData', 'causesData','witnessData','policeData','insuranceData','inspectionData','furtherData'], 
};


const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  combineData: combineDataReducer,
  basicData: basicDataReducer,
  causesData: causesDataReducer,
  witnessData: witnessDataReducer,
  policeData: policeDataReducer,
  insuranceData: insuranceDataReducer,
  inspectionData: inspectionDataReducer,
  furtherData: furtherDataReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});


export const persistor = persistStore(store);
export default store;
