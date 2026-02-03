import { useState } from "react";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import FormCanvas from "../components/FormCanvas";
import PropertiesPanel from "../components/PropertiesPanel";
import "../styles/builder.css";

export default function Builder() {
  const [form, setForm] = useState({
    title: "Untitled Form",
    fields: []
  });

  const [selected, setSelected] = useState(null);

  // ➕ ADD FIELD
  const addField = (type) => {
    setForm(prev => ({
      ...prev,
      fields: [
        ...prev.fields,
        {
          id: Date.now(),
          type,
          label: type === "submit" ? "Submit" : "Untitled",
          value: "",          // ✅ VALUE INIT
          required: false,
          options: []
        }
      ]
    }));
  };

  // ✏️ UPDATE LABEL / REQUIRED
  const updateField = (key, value) => {
    setForm(prev => ({
      ...prev,
      fields: prev.fields.map(f =>
        f.id === selected.id ? { ...f, [key]: value } : f
      )
    }));
    setSelected(prev => ({ ...prev, [key]: value }));
  };

  // ❌ DELETE FIELD
  const deleteField = (id) => {
    setForm(prev => ({
      ...prev,
      fields: prev.fields.filter(f => f.id !== id)
    }));
    setSelected(null);
  };

  // 💾 SAVE FORM (VALUE INCLUDED)
  const saveForm = async () => {
    const res = form._id
      ? await api.put(`/forms/${form._id}`, form)
      : await api.post("/forms", form);

    setForm(res.data);
    alert("✅ Form Saved with Values");
  };

  // 🆕 NEW FORM BUTTON (RESET)
  const newForm = () => {
    setForm({
      title: "Untitled Form",
      fields: []
    });
    setSelected(null);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>FormCraft</h2>
        <div>
          <button onClick={newForm}>New Form</button>
          <button onClick={saveForm}>Save Form</button>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <Sidebar addField={addField} />
        <FormCanvas
          form={form}
          setForm={setForm}
          selectField={setSelected}
          deleteField={deleteField}
        />
        <PropertiesPanel
          field={selected}
          updateField={updateField}
        />
      </div>
    </>
  );
}
