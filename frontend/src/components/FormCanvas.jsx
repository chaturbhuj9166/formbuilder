export default function FormCanvas({
  form,
  setForm,
  selectField,
  deleteField
}) {
  const updateValue = (id, value) => {
    setForm(prev => ({
      ...prev,
      fields: prev.fields.map(f =>
        f.id === id ? { ...f, value } : f
      )
    }));
  };

  return (
    <div style={{ flex: 1, padding: 20 }}>
      <input
        value={form.title}
        onChange={e =>
          setForm({ ...form, title: e.target.value })
        }
      />

      {form.fields.map(f => (
        <div key={f.id} onClick={() => selectField(f)}>
          <button onClick={() => deleteField(f.id)}>❌</button>

          {f.type !== "submit" && <label>{f.label}</label>}

          {f.type !== "submit" && (
            <input
              type={f.type}
              value={f.value}
              onChange={e =>
                updateValue(f.id, e.target.value)
              }
            />
          )}

          {f.type === "submit" && (
            <button>{f.label}</button>
          )}
        </div>
      ))}
    </div>
  );
}
