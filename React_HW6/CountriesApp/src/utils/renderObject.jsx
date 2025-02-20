const formatKey = (key) => key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export function renderObject(obj) {
  if (!obj || typeof obj !== "object") return obj === null ? "null" : obj; 

  return (
    <ul>
      {Object.entries(obj).map(([key, value]) => (
        <li key={key}>
          <strong>{formatKey(key)}:</strong>{" "}
          {Array.isArray(value) ? ( 
            value.length > 0 ? (
              <ul>
                {value.map((item, index) => (
                  <li key={index}>
                    {typeof item === "object" ? renderObject(item) : <span>{item}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              "[]" 
            )
          ) : typeof value === "object" && value !== null ? (
            Object.keys(value).length > 0 ? renderObject(value) : "{}" 
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  );
}
