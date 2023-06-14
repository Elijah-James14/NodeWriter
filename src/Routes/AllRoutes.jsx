import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import PageNotFound from "../Pages/PageNotFound";
const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default AllRoutes;
