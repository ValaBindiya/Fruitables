import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";


function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<UserRoutes />} />
      <Route exact path="/admine/*" element={<AdminRoutes />} />
    </Routes>

  );
}

export default App;
