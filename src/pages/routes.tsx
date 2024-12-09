import { Route, Routes } from "react-router";
import CreateUser from "./CreateUser";
import ListUsers from "./ListUsers";

const Navigation: React.FC = () => (
  <Routes>
    <Route path="/" element={<CreateUser />} />
    <Route path="/users" element={<ListUsers />} />
  </Routes>
);

export default Navigation;
