export default function IndustrialApplicationComponent({ data }) {
    console.log(data)
    return (
        <section className="industrialApplicationComponent wow fadeInUp" data-aos="fade-up">
            <div className="cs_height_100 cs_height_lg_70" />
            <div className="container">
                <div className="row cs_gap_x_40 cs_gap_y_24">

                    <div className="col-lg-6">
                        <h3 className="cs_heading_font">{data.title}</h3>
                        <ul>
                            {
                                data.list.map((item, index) => {
                                    return (
                                        <li key={index} className="cs_secondary_font">{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="cs_cta cs_style_2 cs_bg_filed cs_radius_20 contentImage"
                            style={{ backgroundImage: `url(${data.image})` }}
                        >
                        </div>
                    </div>
                </div>
                <div className="technologyBrochureBtnContainer mt-4 mb-4">
                    <a
                        href={'/contact'}
                        target="_self"
                        rel="noopener noreferrer"
                        data-aos="fade-left"
                        className="cus_brochure_btn cs_btn displayBlock cs_style_1 cs_bold cs_heading_color wow fadeInLeft aos-init aos-animate mt-3"
                    >
                        Contact Us
                    </a>
                </div>
                <div className="cs_height_100 cs_height_lg_70" />
            </div>
        </section>
    )
}