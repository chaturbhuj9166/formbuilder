import { useEffect, useState } from "react";
import api from "../services/api";

export default function MyForms() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    api.get("/forms").then(res => setForms(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Forms</h2>

      {forms.map(f => (
        <div key={f._id}>
          {f.title}
        </div>
      ))}
    </div>
  );
}
