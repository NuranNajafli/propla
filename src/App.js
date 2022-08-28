import './App.css';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import AdminPanel from './components/AdminForm';
import DataTable from './components/DataTable';


function App() {
  return (
    <div>
      <Routes >
        <Route path="/" >
          <Route index element={<Login />} />

          <Route path="home" >
            <Route index element={<Home />} />
            <Route path="projectDetail" element={<ProjectDetail />} />
          </Route>

          <Route path="dataTable">
            <Route index element={<DataTable />} />
            <Route path="adminForm" element={<AdminPanel />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
