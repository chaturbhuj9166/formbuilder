export default function PropertiesPanel({ field, updateField }) {
  if (!field) return <div className="properties">Select field</div>;

  return (
    <div className="properties">
      <label>Label</label>
      <input
        value={field.label}
        onChange={e => updateField("label", e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={field.required}
          onChange={e => updateField("required", e.target.checked)}
        />
        Required
      </label>
    </div>
  );
}
