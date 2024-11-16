import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './dashboard/Sidebar';
import Login from './components/Login/Login';
import { PersistGate } from 'redux-persist/integration/react'; 
import { Provider } from 'react-redux'; 
import store, { persistor } from './redux/store';
import CompanyNew from './components/Companymanagement/Company';
import NewUser from './components/UserManagement/NewUser';
import NewOffice from './components/OfficeManagement/NewOffice';
import PrivateRoute from './components/privateRoute'; 
import CompanyList from './components/Companymanagement/CompanyList';
import EditCompany from './components/Companymanagement/EditCompany';
import EditOffice from './components/OfficeManagement/EditOffice';
import NewLocker from './components/LockerMng/NewLocker';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={
              <PrivateRoute>
              <Sidebar />
              </PrivateRoute>
            }>
              <Route path="" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="cmpMng/newCompany" element={<CompanyNew />} />
              <Route path="cmpMng/editcompany" element={<EditCompany />} />
              <Route path="userMng/newUser" element={<NewUser />} />
              <Route path="offMng/newOff" element={<NewOffice />} />
              <Route path="offMng/editOff" element={<EditOffice />} />
              <Route path="cmpMng/Company_list" element={<CompanyList />} />
              <Route path="lckMng/newlckr" element={<NewLocker/>} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
