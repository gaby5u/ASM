import "./App.css";
import "./styles/stateStyles.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useLocation, Outlet } from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import NewsDetails from "./pages/NewDetails.jsx";
import Acquisitions from "./pages/Acquisitions.jsx";
import AcquisitionDetails from "./pages/AcquisitionDetails.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Transparency from "./pages/Transparency.jsx";
import Contact from "./pages/Contact.jsx";
import Developing from "./pages/Developing.jsx";
import NotFound from "./pages/NotFound.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import ProjectsAdmin from "./pages/Admin/projects/ProjectsAdmin.jsx";
import AddProject from "./pages/Admin/projects/AddProject.jsx";
import EditProject from "./pages/Admin/projects/EditProject.jsx";
import NewsAdmin from "./pages/Admin/news/NewsAdmin.jsx";
import AddNew from "./pages/Admin/news/AddNew.jsx";
import EditNew from "./pages/Admin/news/EditNew.jsx";
import AcquisitionsAdmin from "./pages/Admin/acquisitions/AcquisitionsAdmin.jsx";
import AddAcquisition from "./pages/Admin/acquisitions/AddAcquisition.jsx";
import EditAcquisition from "./pages/Admin/acquisitions/EditAcquisition.jsx";
import DocumentsAdmin from "./pages/Admin/documents/DocumentsAdmin.jsx";
import AddDocument from "./pages/Admin/documents/AddDocument.jsx";
import EditDocument from "./pages/Admin/documents/EditDocument.jsx";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/despre" element={<About />} />
            <Route path="/noutati" element={<News />} />
            <Route path="/noutati/:id" element={<NewsDetails />} />
            <Route path="/achizitii" element={<Acquisitions />} />
            <Route path="/achizitii/:id" element={<AcquisitionDetails />} />
            <Route path="/proiecte/:id" element={<ProjectDetails />} />
            <Route path="/transparenta" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dezvoltare" element={<Developing />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminHome />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/proiecte"
              element={
                <AdminRoute>
                  <ProjectsAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/proiecte/adaugare"
              element={
                <AdminRoute>
                  <AddProject />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/proiecte/editare/:id"
              element={
                <AdminRoute>
                  <EditProject />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/noutati"
              element={
                <AdminRoute>
                  <NewsAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/noutati/adaugare"
              element={
                <AdminRoute>
                  <AddNew />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/noutati/editare/:id"
              element={
                <AdminRoute>
                  <EditNew />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/achizitii"
              element={
                <AdminRoute>
                  <AcquisitionsAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/achizitii/adaugare"
              element={
                <AdminRoute>
                  <AddAcquisition />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/achizitii/editare/:id"
              element={
                <AdminRoute>
                  <EditAcquisition />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/documente"
              element={
                <AdminRoute>
                  <DocumentsAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/documente/adaugare"
              element={
                <AdminRoute>
                  <AddDocument />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/documente/editare/:id"
              element={
                <AdminRoute>
                  <EditDocument />
                </AdminRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
