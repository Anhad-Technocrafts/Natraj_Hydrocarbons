
const thStyle: any = {
    border: "1px solid #ddd",
    padding: "22px 8px",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    textAlign: "left",
    width: '50%',
    fontSize: '22px'
};

const tdStyle: any = {
    border: "1px solid #ddd",
    padding: "22px 8px",
    textAlign: "left",
    fontSize: '18px'
};

export default function TechSpecsSnapshot({ data }) {
    console.log(data)
    return (
        <section>
            <div className="container wow fadeInUp" data-aos="fade-up">
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={thStyle} className="cs_heading_font">Feature</th>
                            <th style={thStyle} className="cs_heading_font">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td style={tdStyle} className="cs_secondary_font">{row.feature}</td>
                                <td style={tdStyle} className="cs_secondary_font">{row.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="technologyBrochureBtnContainer mt-4 ">
                    <a
                        href={'/assets/Nataraj_Hydrocarbons_Brochure.pdf'}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-left"
                        className="cus_brochure_btn cs_btn displayBlock cs_style_1 cs_bold cs_heading_color wow fadeInLeft aos-init aos-animate mt-3"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    )
}