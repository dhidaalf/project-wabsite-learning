import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const HalamanPengembangan = React.lazy(
  () => import("pages/HalamanPengembangan"),
);
const TentangKami = React.lazy(() => import("pages/TentangKami"));
const Website = React.lazy(() => import("pages/Website"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/website" element={<Website />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route
            path="/halamanpengembangan"
            element={<HalamanPengembangan />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
