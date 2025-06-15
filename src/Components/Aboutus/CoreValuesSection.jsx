import React from "react";
import { Icon } from "@iconify/react"; // ✅ import added here

const coreValuesData = [
  {
    icon: 'fa6-solid:lightbulb',
    title: 'Innovation',
    desc: 'We constantly challenge what’s possible with waste-to-fuel technologies.',
  },
  {
    icon: 'fa6-solid:leaf',
    title: 'Sustainability',
    desc: 'Every action we take is a step toward a cleaner planet.',
  },
  {
    icon: 'fa6-solid:handshake',
    title: 'Integrity',
    desc: 'We believe in full transparency, ethical practices, and long-term relationships.',
  },
  {
    icon: 'fa6-solid:rocket',
    title: 'Impact',
    desc: 'We build solutions that create measurable environmental and economic change.',
  },
];

const iconStyle = {
  width: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e0f7f1',
  borderRadius: '50%',
  padding: '8px',
};


export default function CoreValuesSection() {
  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2
            className="cs_section_title cs_fs_80 mb-0"
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: "Our Values" }}
          />
        </div>
        <div className="cs_height_64 cs_height_lg_50" />
        <div
          className="d-flex flex-wrap justify-content-between gap-4"
          style={{ rowGap: '2rem' }}
        >
          {coreValuesData.map((item, index) => (
            <div
              key={index}
              className="valueCard p-4 wow fadeInUp"
              data-aos="fade-up"
              style={{
                flex: '1 1 calc(48%)', // 2 per row with 4% total gap
                maxWidth: 'calc(48%)',
              }}
            >
              <div>
                <div className="cs_icon mb-3">
                  <i className="d-flex" style={iconStyle}>
                    <Icon icon={item.icon} width="30" height="30" color="#2a9d8f" />
                  </i>
                </div>
                <h4 className="cs_fs_24 cs_bold mb-2">{item.title}</h4>
                <p className="cs_fs_18 mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
  );
}
