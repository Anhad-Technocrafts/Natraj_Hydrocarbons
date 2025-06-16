import React from "react";

const TechnicalSpecifications = () => {
  const specs = [
    { property: "Appearance", value: "Dark brown to black liquid" },
    { property: "Calorific Value", value: "~10,500 kcal/kg" },
    { property: "Sulphur Content", value: "0%" },
    { property: "Moisture Content", value: "<1%" },
    { property: "Flash Point", value: "60–65°C" },
    { property: "Ash Content", value: "Negligible" },
    { property: "Viscosity", value: "Customizable as per client" },
  ];

  return (
    <section>
      <div className="container">
        <div className="technical-specs-container">
          <h2>TECHNICAL SPECIFICATIONS</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Property</th>
                <th style={thStyle}>RDF Oil Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.property}</td>
                  <td style={tdStyle}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cs_height_85 cs_height_lg_40 " />
    </section>
  );
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  fontWeight: "bold",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default TechnicalSpecifications;
