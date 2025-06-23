import React from "react";

const ComparisonTable = () => {
  const tableData = [
    {
      feature: "Fuel Source",
      ourRDFOil: "Waste plastic",
      otherOptions: "Mixed waste or fossil-based",
    },
    {
      feature: "Sulphur Content",
      ourRDFOil: "0%",
      otherOptions: "1.5% – 2.5%",
    },
    {
      feature: "Calorific Value",
      ourRDFOil: " 11,000 kcal/kg",
      otherOptions: "9,500 – 9,800 kcal/kg",
    },
    {
      feature: "Smoke Emission",
      ourRDFOil: "None",
      otherOptions: "Moderate to heavy",
    },
    {
      feature: "GHG Emission",
      ourRDFOil: "Significantly reduced",
      otherOptions: "Higher emissions",
    },
    {
      feature: "Operational Cost Impact",
      ourRDFOil: "Up to 10–12% savings",
      otherOptions: "Baseline or marginal savings",
    },
    {
      feature: "Sourcing Sustainability",
      ourRDFOil: "Circular economy aligned",
      otherOptions: "Linear supply chain model",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="comparison-table-container">
          <h2>HOW WE COMPARE</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={thStyle}>Feature</th>
                <th style={thStyle}>Our RDF Oil</th>
                <th style={thStyle}>Other Market Options</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.feature}</td>
                  <td style={tdStyle}>{row.ourRDFOil}</td>
                  <td style={tdStyle}>{row.otherOptions}</td>
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

export default ComparisonTable;
