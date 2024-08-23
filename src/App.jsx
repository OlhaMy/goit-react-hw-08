import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const ContactsApp = lazy(() => import("./components/ContactsApp/ContactsApp"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<h2>Loading....</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contacts" element={<ContactsApp />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
