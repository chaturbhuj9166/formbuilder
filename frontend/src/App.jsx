import { Routes, Route, Link } from "react-router-dom";
import Builder from "./pages/Builder";
import MyForms from "./pages/MyForms";


export default function App() {
  return (
    <>
      <nav style={{ padding: 10 }}>
        <Link to="/">Builder</Link>{" | "}
        <Link to="/my-forms">My Forms</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/my-forms" element={<MyForms />} />
      </Routes>
    </>
  );
}
