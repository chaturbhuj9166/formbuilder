export default function Sidebar({ addField }) {
  const fields = [
    { type: "text", label: "Text" },
    { type: "textarea", label: "Textarea" },
    { type: "email", label: "Email" },
    { type: "number", label: "Number" },
    { type: "radio", label: "Radio" },
    { type: "checkbox", label: "Checkbox" },
    { type: "submit", label: "Submit Button" }
  ];

  return (
    <div className="sidebar">
      <h4>Components</h4>
      {fields.map(f => (
        <div
          key={f.type}
          className="sidebar-item"
          onClick={() => addField(f.type)}
        >
          {f.label}
        </div>
      ))}
    </div>
  );
}
