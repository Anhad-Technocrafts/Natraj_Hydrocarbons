import { Icon } from "@iconify/react";

const iconStyle = {
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#e0f7f1',
    // borderRadius: '50%',
    padding: '8px',
};


export default function OurTechApart({ data }) {
    console.log(data)
    return (
        <section className="ourTechApartComponent">
            <div className="cs_height_100 cs_height_lg_70" style={{marginBottom: '10px'}} />
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        data.map(item => {
                            return (
                                <div
                                    className="valueCard wow fadeInUp"
                                    key={item.id}
                                    data-aos="fade-up"
                                    style={{
                                       
                                    }}>
                                    <div className="cs_icon mb-3">
                                        <img className="d-flex" src={item.icon} style={iconStyle} />
                                    </div>
                                    <h4 className="cs_fs_24 cs_bold mb-2">{item.title}</h4>
                                    <p className="cs_fs_18 mb-0">{item.desc}</p>
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
