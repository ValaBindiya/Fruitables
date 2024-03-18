import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";


function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<UserRoutes />} />
      <Route element={<PrivateRoutes />} >
        <Route exact path="/admine/*" element={<AdminRoutes />} />
      </Route>
    </Routes>

  );
}

export default App;
