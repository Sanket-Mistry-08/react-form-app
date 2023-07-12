import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form/Form';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormUserInfo from './component/Form/FormContext/FormUserInfo';
import FormUserAdressDetail from './component/Form/FormContext/FormUserAdressDetail';
import FormSummary from './component/Form/FormContext/FormSummary';
function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />}>
            <Route path='user-info' element={<FormUserInfo />} />
            <Route path='user-adress-details' element={<FormUserAdressDetail />} />
            <Route path='summary' element={<FormSummary />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/form/user-info" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
