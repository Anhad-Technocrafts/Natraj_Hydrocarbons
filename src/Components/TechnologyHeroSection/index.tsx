export default function TechnologyHeroSection({ data }) {
    console.log(data)
    return (
        <section className="technologyComponent wow fadeInUp" data-aos="fade-up">
            <div className="cs_height_100 cs_height_lg_70" />
            <div className="container">
                <div className="row cs_gap_x_40 cs_gap_y_24">

                    <div className="col-lg-6">
                        <p
                            className="cs_fs_18 mb-0 introductionP"
                            dangerouslySetInnerHTML={{ __html: data.introduction }}
                        ></p>
                        <p
                            className="cs_fs_18 mb-0 introductionP"
                            dangerouslySetInnerHTML={{ __html: data.introduction1 }}
                        ></p>
                        <p
                            className="cs_fs_18 mb-0 introductionP"
                            dangerouslySetInnerHTML={{ __html: data.introduction2 }}
                        ></p>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="cs_cta cs_style_2 cs_bg_filed cs_radius_20"
                            style={{ backgroundImage: `url(${data.cta.backgroundImage})` }}
                        >
                        </div>
                    </div>
                </div>
                <div className="cs_height_100 cs_height_lg_70" />
            </div>
        </section>
    )
}