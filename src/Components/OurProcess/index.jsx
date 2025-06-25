export default function OurProcess({ data }) {
    console.log(data)
    return (
        <section className="ourProcessComponent">
            <div className="cs_height_60 cs_height_lg_50" style={{marginBottom:'3px'}} />
            <div className="container">
                <div className="row cs_gap_x_40 cs_gap_y_24">
                    {
                        data.map(item => {
                            return (
                                <div className="col-lg-3 ourProcessStepCol wow fadeInUp" key={item.step} data-aos="fade-up">
                                    <h5 className="cs_heading_font">{item.step}</h5>
                                    <h2 className="cs_heading_font">{item.title}</h2>
                                    <p className="cs_secondary_font">{item.desc}</p>
                                </div>
                            )
                        })
                    }


                </div>
                <div className="cs_height_100 cs_height_lg_70" />
            </div>
        </section>
    )
}