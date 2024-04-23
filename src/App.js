import logo from './logo.svg';
import './App.css';
import Index from './Frontend/index';
import {BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import FrontendRoute from './route/frontend'
import { UserProvider } from './Frontend/context/userContext';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import IndexAdmin from './Backend';
import BackendRoute from './route/backend';

function App() {
  return ( 
    <div>

      <Provider store={store}>
      <UserProvider>
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
          <Route path="/" element={<Index />}>
            {
              FrontendRoute.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })
            }
          </Route>

            {/* Backend Route */}
          <Route path="/admin" element={<IndexAdmin />}>
            {
              BackendRoute.map((route, index) => {
                const Page = route.component;
                return <Route key={index} path={route.path} element={<Page />} />;
              })
            }
          </Route>

        </Routes>
           
      </BrowserRouter>
      </UserProvider>
      </Provider>
      
    </div>
  );
}

export default App;
